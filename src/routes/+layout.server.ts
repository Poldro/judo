import directus from "$lib/directus";
import { readItems } from "@directus/sdk";
import type { LayoutServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ setHeaders }) => {
    // Run all Directus requests in parallel instead of serially
    const [techniques, exams, katas, globals] = await Promise.all([
        directus.request(readItems('techniques_divisions', {
            fields: ['id', 'name', 'description', {
                categories: ['id', 'name', 'description', {
                    sub_categories: ['id', 'name', 'description', {
                        techniques: ['slug', 'name', 'jpn_name']
                    }]
                }, {
                    techniques: ['slug', 'name', 'jpn_name']
                }]
            }]
        })),
        directus.request(readItems('exams', {
            fields: ['slug', 'name']
        })),
        directus.request(readItems('kata', {
            sort: ['sort'],
            fields: ['slug', 'name', 'traduction_name', 'description']
        })),
        directus.request(readItems('global', {
            fields: ['*']
        })),
    ]);

    if (!techniques || !exams || !katas || !globals) {
        throw error(500, 'Something happened');
    }

    // Cache at CDN level: serve fresh for 1h, stale-while-revalidate for 24h
    // Data changes rarely; this prevents hammering Directus on every page visit
    setHeaders({
        'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    });

    return { techniques, exams, katas, globals };
};
