import * as server from '../entries/pages/kata/_slug_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kata/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/kata/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.SYbcyg4Q.js","_app/immutable/chunks/Dmvgr_CA.js","_app/immutable/chunks/6dRSNIhI.js","_app/immutable/chunks/BrX8zIj6.js","_app/immutable/chunks/BeEhkBP_.js","_app/immutable/chunks/BUeP24Xp.js","_app/immutable/chunks/B_KZOVH0.js","_app/immutable/chunks/DfkibdQW.js","_app/immutable/chunks/CEvUjGoN.js","_app/immutable/chunks/DXJoH3ey.js","_app/immutable/chunks/1aGb9e8a.js","_app/immutable/chunks/CWlmYmuf.js","_app/immutable/chunks/DY9moHUP.js"];
export const stylesheets = [];
export const fonts = [];
