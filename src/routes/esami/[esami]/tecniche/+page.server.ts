import directus from "$lib/directus";
import { readItem, readItems } from "@directus/sdk";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ params }) => {
    /*     const examTechniques = await directus.request(readItems('techniques', {
            filter: {
                exam_id: { _eq: params.esami }
            },
            fields: ['slug']
        })) */


    const examTechniques = await directus.request(
        readItem('exams', params.esami, {
            fields: [{ techniques: [{ techniques_slug: ['name', 'slug'] }] }, { exams_programs: ['*'] }]
        })
    )

    return {
        examTechniques
    };
}; 
