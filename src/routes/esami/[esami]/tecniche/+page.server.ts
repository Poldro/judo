import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, setHeaders }) => {
    const examTechniques = await directus.request(
        readItem('exams', params.esami, {
            fields: [{ techniques: [{ techniques_slug: ['name', 'slug'] }] }, { exams_programs: ['*'] }]
        })
    );

    setHeaders({ 'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400' });

    return { examTechniques };
};
