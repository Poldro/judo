import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://directus-production-1d11.up.railway.app/').with(rest());

export default directus;