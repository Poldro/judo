import directus from "$lib/directus";
import { readItem } from "@directus/sdk";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ params }) => {
    const exams = await directus.request(readItem('exams', params.esami, {
        fields: ['slug', 'name', 'description', {exams_programs: [{programs_exam_slug:[ 'name', 'slug', 'sort' ]}]}],
    }))

    if (exams.errors) {
        throw error(404, 'Not found here');
    }

    return {
        exams
    };
}; 
