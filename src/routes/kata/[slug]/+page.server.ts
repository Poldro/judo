import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import type { PageServerLoad } from "../$types";
import { error } from "@sveltejs/kit";


export const load: PageServerLoad = async ({ params }) => {
    const kata = await directus.request(readItem('kata', params.slug, {
        fields: ['*']
    }))

    if (kata.errors) {
        throw error(404, 'Not found here');
    }

    return {
        kata
    };
}; 
