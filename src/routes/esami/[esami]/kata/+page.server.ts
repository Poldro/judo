import directus from '$lib/server/directus';
import { readItem } from '@directus/sdk';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    // Parallelize the two independent Directus requests
    const [programKata, examKatas] = await Promise.all([
        directus.request(
            readItem('programs_exam', 'kata', {
                fields: ['slug', 'name', 'description']
            })
        ),
        directus.request(
            readItem('exams', params.esami, {
                fields: [{ katas: [{ kata_slug: ['name', 'slug'] }] }, { exams_programs: ['*'] }]
            })
        ),
    ]);

    return { programKata, examKatas };
};
