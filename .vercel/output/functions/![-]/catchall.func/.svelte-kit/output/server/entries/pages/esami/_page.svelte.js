import { a as store_get, b as spread_props, u as unsubscribe_stores, c as bind_props, e as ensure_array_like, d as attr, f as stringify, g as escape_html } from "../../../chunks/root.js";
import { S as SEO, P as PageContainer } from "../../../chunks/PageContainer.js";
import { H as HeaderPages } from "../../../chunks/HeaderPages.js";
import { p as page } from "../../../chunks/stores.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let data = $$props["data"];
    let title = "Esami";
    let metaTitle = "Esami 1°, 2° e 3° DAN Judo";
    let metadescription = "Elenco Programma di 1°, 2° e 3° DAN Judo Italia";
    const seoProps = {
      data,
      title: metaTitle,
      slug: store_get($$store_subs ??= {}, "$page", page).url.pathname,
      metadescription
    };
    SEO($$renderer2, spread_props([seoProps]));
    $$renderer2.push(`<!----> `);
    HeaderPages($$renderer2, { title });
    $$renderer2.push(`<!----> `);
    PageContainer($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="max-w-md flex flex-col w-full gap-4"><!--[-->`);
        const each_array = ensure_array_like(data.exams);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let { name, slug } = each_array[$$index];
          $$renderer3.push(`<a class="block card card-hover bg-surface-100-900-token border border-surface-300-600-token"${attr("href", `esami/${stringify(slug)}`)}><div class="p-5 flex items-center gap-4"><span class="text-3xl shrink-0">🥋</span> <p class="font-semibold text-lg leading-tight">${escape_html(name)}</p> <span class="ml-auto opacity-30 text-lg">›</span></div></a>`);
        }
        $$renderer3.push(`<!--]--> <a class="btn variant-soft w-auto self-start" target="_blank" href="./J_Esami Regionali di Graduazione 2023.pdf">Programmi (pdf)</a></div>`);
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
