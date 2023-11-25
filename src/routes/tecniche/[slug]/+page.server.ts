import directus from '$lib/directus';
import { readItem } from '@directus/sdk';
import { error } from '@sveltejs/kit';

export const load = async ({ params }: { params: { slug: string } }) => {
	const technique = await directus.request(
		readItem('techniques', params.slug, {
			fields: ['*', { videos: [{ video_id: ['url_yt', 'name', 'alt'] }] }]
		})
	);
	if (technique.errors) {
		throw error(404, 'Not found here');
	}

	return {
		technique
	};
};
