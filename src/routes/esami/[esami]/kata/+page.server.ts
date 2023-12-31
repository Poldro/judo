import directus from '$lib/directus';
import { readItem, readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
/* 	const examKatas = await directus.request(
		readItems('kata', {
			sort: ['sort'],
			filter: {
				exam_id: { _eq: params.esami }
			},
			fields: ['slug', 'name']
		})
	); */

	const programKata = await directus.request(
		readItem('programs_exam', 'kata', {
			fields: ['slug', 'name', 'description']
		})
	);

	const examKatas = await directus.request(
		readItem('exams', params.esami, {
			fields: [ {katas: [{kata_slug: ['name', 'slug']}]}, {exams_programs: ['*']}]
		})
	)

	if (examKatas.errors) {
		throw error(404, 'Not found here');
	}

	return {
		programKata,
		examKatas
	};
};
