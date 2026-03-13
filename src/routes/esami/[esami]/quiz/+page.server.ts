import directus from '$lib/directus';
import { readItem, readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const exam = await directus.request(
		readItem('exams', params.esami, {
			fields: ['slug', 'name', 'type', 'level']
		})
	);

	if (!exam) throw error(404, 'Esame non trovato');

	let questions = [];
	try {
		questions = await directus.request(
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
		);
	} catch {
		// quiz_questions non disponibile o nessuna domanda
	}

	return { exam, questions };
};
