import { g as escape_html, c as bind_props } from "./root.js";
import "clsx";
function GoBack($$renderer) {
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path></svg>`);
}
function BackButton($$renderer) {
  $$renderer.push(`<button>`);
  GoBack($$renderer);
  $$renderer.push(`<!----></button>`);
}
function HeaderPages($$renderer, $$props) {
  let title = $$props["title"];
  $$renderer.push(`<header class="flex items-center gap-3 px-4 py-3 bg-surface-100-900-token border-b border-surface-300-600-token">`);
  BackButton($$renderer);
  $$renderer.push(`<!----> <h1 class="flex-1 text-lg font-semibold lg:text-center truncate">${escape_html(title)}</h1></header>`);
  bind_props($$props, { title });
}
export {
  HeaderPages as H
};
