import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ params }) => {
    const programs = await directus.request(readItem('programs_exam', params.static, {
      /*   filter: {
            isDynamic: {
                _eq: false
            }
        } */
        fields: ['*', {urls: [{url_id: ['*']}]}]
    }))

    return {
        programs
    };
}; 
