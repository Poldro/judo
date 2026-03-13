import { a as store_get, b as spread_props, u as unsubscribe_stores, c as bind_props } from "../../chunks/root.js";
import { S as SEO, P as PageContainer } from "../../chunks/PageContainer.js";
import { p as page } from "../../chunks/stores.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let data = $$props["data"];
    let title = "Homepage judo Italia";
    const seoProps = {
      data,
      title,
      slug: store_get($$store_subs ??= {}, "$page", page).url.pathname,
      metadescription: data.globals.description
    };
    SEO($$renderer2, spread_props([seoProps]));
    $$renderer2.push(`<!----> `);
    PageContainer($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="max-w-md flex flex-col w-full gap-4"><a class="block card card-hover bg-surface-100-900-token border border-surface-300-600-token" href="/esami"><div class="p-5 flex items-center gap-4"><span class="text-4xl shrink-0">📖</span> <div><p class="font-semibold text-lg leading-tight">Esami Cintura Nera</p> <p class="text-sm opacity-55 mt-0.5">Programmi, tecniche e requisiti</p></div> <span class="ml-auto opacity-30 text-lg">›</span></div></a> <a class="block card card-hover bg-surface-100-900-token border border-surface-300-600-token" href="/tecniche"><div class="p-5 flex items-center gap-4"><span class="text-4xl shrink-0">🥋</span> <div><p class="font-semibold text-lg leading-tight">Tecniche</p> <p class="text-sm opacity-55 mt-0.5">Nage-waza e Katame-waza IJF</p></div> <span class="ml-auto opacity-30 text-lg">›</span></div></a> <a class="block card card-hover bg-surface-100-900-token border border-surface-300-600-token" href="/kata"><div class="p-5 flex items-center gap-4"><span class="text-4xl shrink-0">🌊</span> <div><p class="font-semibold text-lg leading-tight">Kata</p> <p class="text-sm opacity-55 mt-0.5">Le forme codificate del judo</p></div> <span class="ml-auto opacity-30 text-lg">›</span></div></a></div>`);
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
