import directus from "$lib/directus";
import { readItems } from "@directus/sdk";

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		global: await directus.request(readItems('global'))
	};
};
