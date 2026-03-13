import directus from '$lib/directus';
import { readItem } from '@directus/sdk';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
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

    setHeaders({ 'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400' });

    return { programKata, examKatas };
};
