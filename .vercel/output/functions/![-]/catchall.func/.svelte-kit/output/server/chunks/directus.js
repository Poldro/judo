import { createDirectus, rest } from "@directus/sdk";
const PUBLIC_DIRECTUS_URL = "https://directus-production-1d11.up.railway.app/";
const PUBLIC_SITE_URL = "https://judo.poldro.eu";
const directus = createDirectus(PUBLIC_DIRECTUS_URL).with(rest());
export {
  PUBLIC_SITE_URL as P,
  directus as d
};
