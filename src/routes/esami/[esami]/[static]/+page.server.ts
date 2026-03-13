import directus from "$lib/server/directus";
import { readItem } from "@directus/sdk";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const programs = await directus.request(readItem('programs_exam', params.static, {
        fields: ['*', { urls: [{ url_id: ['*'] }] }]
    }));

    return { programs };
};
