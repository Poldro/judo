import directus from '$lib/directus';
import { readItem } from '@directus/sdk';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const technique = await directus.request(
			readItem('techniques', params.slug, {
				fields: ['*', { videos: [{ video_id: ['url_yt', 'name', 'alt'] }] }]
			})
		);

		if (!technique) throw error(404, 'Tecnica non trovata');

		return { technique };
	} catch (e: any) {
		if (e?.status) throw e;
		throw error(503, 'Servizio temporaneamente non disponibile');
	}
};
