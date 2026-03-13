import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, setHeaders }) => {
    try {
        const kata = await directus.request(readItem('kata', params.slug, {
            fields: ['*', { urls: [{ url_id: ['*'] }] }, { techniques: ['name', 'slug'] }, { videos: [{ video_id: ['url_yt', 'name', 'alt'] }] }]
        }));

        if (!kata) throw error(404, 'Kata non trovato');

        setHeaders({ 'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400' });

        return { kata };
    } catch (e: any) {
        if (e?.status) throw e;
        throw error(503, 'Servizio temporaneamente non disponibile');
    }
};
