import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const exams = await directus.request(readItem('exams', params.esami, {
        fields: ['slug', 'name', 'description', { exams_programs: [{ programs_exam_slug: ['name', 'slug', 'sort'] }] }],
    }));

    return { exams };
};
