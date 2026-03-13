import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BvgczFbl.js","_app/immutable/chunks/Dmvgr_CA.js","_app/immutable/chunks/6dRSNIhI.js","_app/immutable/chunks/BrX8zIj6.js","_app/immutable/chunks/BeEhkBP_.js","_app/immutable/chunks/1aGb9e8a.js","_app/immutable/chunks/CEvUjGoN.js","_app/immutable/chunks/DXJoH3ey.js"];
export const stylesheets = [];
export const fonts = [];
