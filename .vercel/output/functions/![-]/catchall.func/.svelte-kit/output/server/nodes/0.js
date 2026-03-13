import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BTE7f_x7.js","_app/immutable/chunks/Dmvgr_CA.js","_app/immutable/chunks/6dRSNIhI.js","_app/immutable/chunks/BUeP24Xp.js","_app/immutable/chunks/BeEhkBP_.js","_app/immutable/chunks/IBe9S2Ni.js","_app/immutable/chunks/BrX8zIj6.js","_app/immutable/chunks/CEvUjGoN.js","_app/immutable/chunks/DXJoH3ey.js","_app/immutable/chunks/CL_FW100.js","_app/immutable/chunks/B_KZOVH0.js","_app/immutable/chunks/DvAkUpZq.js","_app/immutable/chunks/Cs6Veb6p.js"];
export const stylesheets = ["_app/immutable/assets/0.9Tm8KxXi.css"];
export const fonts = [];
