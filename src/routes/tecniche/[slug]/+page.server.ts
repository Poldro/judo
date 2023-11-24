import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import { error } from "@sveltejs/kit";


export const load = async ({ params }) => {
    const technique = await directus.request(readItem('techniques', params.slug, {
        fields: ['*', {videos: [{video_id: ['url_yt', 'name', 'alt']}]}]

    }))
console.log(technique)
    if (technique.errors) {
        throw error(404, 'Not found here');
    }

    return {
        technique
    };
}; 
