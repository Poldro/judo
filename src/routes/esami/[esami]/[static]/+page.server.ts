import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, setHeaders }) => {
    const programs = await directus.request(readItem('programs_exam', params.static, {
        fields: ['*', { urls: [{ url_id: ['*'] }] }]
    }));

    setHeaders({ 'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400' });

    return { programs };
};
