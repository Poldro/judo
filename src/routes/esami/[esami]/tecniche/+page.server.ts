import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const examTechniques = await directus.request(
        readItem('exams', params.esami, {
            fields: [{ techniques: [{ techniques_slug: ['name', 'slug'] }] }, { exams_programs: ['*'] }]
        })
    );

    return { examTechniques };
};
