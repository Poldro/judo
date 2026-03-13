import { createDirectus, rest, staticToken } from '@directus/sdk';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
import { DIRECTUS_TOKEN } from '$env/static/private';
import type { Schema } from '$lib/directus';

const directus = createDirectus<Schema>(PUBLIC_DIRECTUS_URL)
	.with(staticToken(DIRECTUS_TOKEN))
	.with(rest());

export default directus;
