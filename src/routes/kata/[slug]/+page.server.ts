import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ params }) => {
    const kata = await directus.request(readItem('kata', params.slug, {
        fields: ['*', {techniques: ['name', 'slug']}, {videos: [{video_id: ['url_yt', 'name', 'alt']}]}]
    }))

    if (kata.errors) {
        throw error(404, 'Not found here');
    }

    return {
        kata
    };
}; 
 