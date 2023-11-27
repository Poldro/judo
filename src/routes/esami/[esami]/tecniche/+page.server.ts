import directus from "$lib/directus";
import { readItems } from "@directus/sdk";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ params }) => {
    const examTechniques = await directus.request(readItems('techniques', {
        filter: {
            exam_id: { _eq: params.esami }
        },
        fields: ['slug']
    }))

    if (examTechniques.errors) {
        throw error(404, 'Not found here');
    }

    return {
        examTechniques
    };
}; 