import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import type { PageServerLoad } from "../$types";
import { error } from "@sveltejs/kit";


export const load: PageServerLoad = async ({ params }) => {
    const technique = await directus.request(readItem('techniques', params.slug, {
        fields: ['*']
    }))

    if (technique.errors) {
        throw error(404, 'Not found here');
    }

    return {
        technique
    };
}; 
