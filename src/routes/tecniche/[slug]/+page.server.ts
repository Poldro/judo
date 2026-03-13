import directus from '$lib/directus';
import { readItem } from '@directus/sdk';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const technique = await directus.request(
		readItem('techniques', params.slug, {
			fields: ['*', { videos: [{ video_id: ['url_yt', 'name', 'alt'] }] }]
		})
	);

	setHeaders({ 'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400' });

	return { technique };
};
