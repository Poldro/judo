import { h as fallback, e as ensure_array_like, d as attr, g as escape_html, c as bind_props, a as store_get, b as spread_props, u as unsubscribe_stores } from "../../../../../chunks/root.js";
import { p as page } from "../../../../../chunks/stores.js";
import { B as BlankLink } from "../../../../../chunks/BlankLink.js";
import { S as SEO, P as PageContainer } from "../../../../../chunks/PageContainer.js";
import { H as HeaderPages } from "../../../../../chunks/HeaderPages.js";
import { h as html } from "../../../../../chunks/html.js";
function LogoClouds($$renderer, $$props) {
  let items = fallback($$props["items"], () => [], true);
  $$renderer.push(`<div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5 w-full"><!--[-->`);
  const each_array = ensure_array_like(items);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { title, href } = each_array[$$index];
    $$renderer.push(`<a${attr("href", href)} target="_blank" rel="nofollow noreferrer" class="logo-item hover:!variant-soft-surface"><span>${escape_html(title)}</span> <span>`);
    BlankLink($$renderer);
    $$renderer.push(`<!----></span></a>`);
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { items });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let urls;
    let data = $$props["data"];
    let title;
    let metadescription;
    let seoProps;
    title = data.programs.name;
    metadescription = data.programs.description;
    seoProps = {
      data,
      title,
      slug: store_get($$store_subs ??= {}, "$page", page).url.pathname,
      metadescription
    };
    urls = (data.programs.urls ?? []).map((i) => ({ title: i.url_id.name, href: i.url_id.url }));
    SEO($$renderer2, spread_props([seoProps]));
    $$renderer2.push(`<!----> `);
    HeaderPages($$renderer2, { title });
    $$renderer2.push(`<!----> `);
    PageContainer($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="max-w-4xl w-full">`);
        LogoClouds($$renderer3, { items: urls });
        $$renderer3.push(`<!----></div> <div class="max-w-2xl w-full"><div class="prose">${html(data.programs.content)}</div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
