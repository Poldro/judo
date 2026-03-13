import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, setHeaders }) => {
    const kata = await directus.request(readItem('kata', params.slug, {
        fields: ['*', { urls: [{ url_id: ['*'] }] }, { techniques: ['name', 'slug'] }, { videos: [{ video_id: ['url_yt', 'name', 'alt'] }] }]
    }));

    setHeaders({ 'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400' });

    return { kata };
};
