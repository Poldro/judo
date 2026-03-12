import directus from '$lib/directus';
import { readItem } from '@directus/sdk';
export const load = async ({ params }: { params: { slug: string } }) => {
	const technique = await directus.request(
		readItem('techniques', params.slug, {
			fields: ['*', { videos: [{ video_id: ['url_yt', 'name', 'alt'] }] }]
		})
	);
	return {
		technique
	};
};
