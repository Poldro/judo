import { h as fallback, e as ensure_array_like, d as attr, g as escape_html, c as bind_props } from "./root.js";
import { A as ArrowRight } from "./ArrowRight.js";
import { B as BlankLink } from "./BlankLink.js";
function NavigationList($$renderer, $$props) {
  let items = fallback($$props["items"], () => [], true);
  let icon = fallback($$props["icon"], false);
  let drawerClose = fallback($$props["drawerClose"], () => {
  });
  $$renderer.push(`<nav class="list-nav w-full"><ul><!--[-->`);
  const each_array = ensure_array_like(items);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { title, href, blank } = each_array[$$index];
    $$renderer.push(`<li><a${attr("href", href)} class="hover:!variant-soft-surface"${attr("target", blank ? "_blank" : "")}><span class="flex-1 whitespace-normal text-sm">${escape_html(title)}</span> `);
    if (icon) {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<span class="opacity-40 shrink-0">`);
      if (blank) {
        $$renderer.push("<!--[0-->");
        BlankLink($$renderer);
      } else {
        $$renderer.push("<!--[-1-->");
        ArrowRight($$renderer);
      }
      $$renderer.push(`<!--]--></span>`);
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]--></a></li>`);
  }
  $$renderer.push(`<!--]--></ul></nav>`);
  bind_props($$props, { items, icon, drawerClose });
}
export {
  NavigationList as N
};
