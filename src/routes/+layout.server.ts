import directus from "$lib/directus";
import { readItems } from "@directus/sdk";
import type { LayoutServerLoad } from "./$types";
import { error } from "@sveltejs/kit";


export const load: LayoutServerLoad = async () => {
    const techniques = await directus.request(readItems('techniques_divisions', {
        fields: ['id', 'name', 'description', { categories: ['id', 'name', 'description', { sub_categories: ['id', 'name', 'description', { techniques: ['slug', 'name', 'jpn_name'] }] }, { techniques: ['slug', 'name', 'jpn_name'] }] }]
    }))

    const exams = await directus.request(readItems('exams', {
        fields: ['slug', 'name']
    }))

    if (!techniques || !exams) {
        throw error(404, 'Not found here');
    }
    return {
        techniques, exams
    };
};
