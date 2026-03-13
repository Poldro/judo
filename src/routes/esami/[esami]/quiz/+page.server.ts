import directus from '$lib/directus';
import { readItem, readItems } from '@directus/sdk';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const [exam, questions] = await Promise.all([
		directus.request(
			readItem('exams', params.esami, {
				fields: ['slug', 'name', 'type', 'level']
			})
		),
		directus.request(
			readItems('quiz_questions', {
				filter: { exam: { _eq: params.esami } },
				sort: ['sort'],
				fields: [
					'id',
					'question',
					'option_a',
					'option_b',
					'option_c',
					'option_d',
					'correct_answer',
					'explanation'
				]
			})
		)
	]);

	setHeaders({ 'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400' });

	return { exam, questions };
};
