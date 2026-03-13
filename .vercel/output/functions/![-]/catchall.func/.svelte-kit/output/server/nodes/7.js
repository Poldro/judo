import * as server from '../entries/pages/esami/_esami_/tecniche/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/esami/_esami_/tecniche/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/esami/[esami]/tecniche/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.DFFqX_KG.js","_app/immutable/chunks/Dmvgr_CA.js","_app/immutable/chunks/6dRSNIhI.js","_app/immutable/chunks/BrX8zIj6.js","_app/immutable/chunks/BeEhkBP_.js","_app/immutable/chunks/BUeP24Xp.js","_app/immutable/chunks/B_KZOVH0.js","_app/immutable/chunks/CEvUjGoN.js","_app/immutable/chunks/DXJoH3ey.js","_app/immutable/chunks/1aGb9e8a.js","_app/immutable/chunks/CL_FW100.js","_app/immutable/chunks/DvAkUpZq.js","_app/immutable/chunks/Cs6Veb6p.js","_app/immutable/chunks/DY9moHUP.js"];
export const stylesheets = [];
export const fonts = [];
