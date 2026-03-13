import { a as store_get, b as spread_props, u as unsubscribe_stores, c as bind_props, e as ensure_array_like, d as attr, f as stringify, g as escape_html } from "../../../chunks/root.js";
import { p as page } from "../../../chunks/stores.js";
import { S as SEO, P as PageContainer } from "../../../chunks/PageContainer.js";
import { H as HeaderPages } from "../../../chunks/HeaderPages.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let data = $$props["data"];
    let title = "Kata";
    let metadescription = "Lista dei kata judo del Kodokan.";
    const seoProps = {
      data,
      title,
      slug: store_get($$store_subs ??= {}, "$page", page).url.pathname,
      metadescription
    };
    SEO($$renderer2, spread_props([seoProps]));
    $$renderer2.push(`<!----> `);
    HeaderPages($$renderer2, { title });
    $$renderer2.push(`<!----> `);
    PageContainer($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="max-w-4xl w-full grid lg:grid-cols-2 gap-4"><!--[-->`);
        const each_array = ensure_array_like(data.katas);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let kata = each_array[$$index];
          $$renderer3.push(`<a class="flex flex-col card card-hover bg-surface-100-900-token border border-surface-300-600-token p-5 space-y-2"${attr("href", `kata/${stringify(kata.slug)}`)}><div class="flex items-center justify-between"><h3 class="font-semibold text-lg leading-tight">${escape_html(kata.name)}</h3> <span class="opacity-30 text-lg">›</span></div> <p class="text-sm opacity-55">${escape_html(kata.traduction_name)}</p> <p class="flex-1 text-sm opacity-70 whitespace-pre-line line-clamp-3">${escape_html(kata.description)}</p></a>`);
        }
        $$renderer3.push(`<!--]--></div>`);
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
