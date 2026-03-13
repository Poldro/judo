import { a as store_get, b as spread_props, u as unsubscribe_stores, c as bind_props, g as escape_html } from "../../../../../chunks/root.js";
import { p as page } from "../../../../../chunks/stores.js";
import { S as SEO, P as PageContainer } from "../../../../../chunks/PageContainer.js";
import { N as NavigationList } from "../../../../../chunks/NavigationList.js";
import { H as HeaderPages } from "../../../../../chunks/HeaderPages.js";
const createNavigationLinks = (items, href) => {
  return items.map((item) => ({
    title: item.name,
    href: `/${href}/${item.slug}`
    // Modify the path as needed
  }));
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let data = $$props["data"];
    let navigationItems = createNavigationLinks((data.examKatas.katas ?? []).map((kata) => kata.kata_slug), "kata");
    let title = "Kata";
    let metaTitle = "Programma esame kata Judo";
    let metadescription = "Programma kata Judo Italia";
    const seoProps = {
      data,
      title: metaTitle,
      slug: store_get($$store_subs ??= {}, "$page", page).url.pathname,
      metadescription
    };
    let description;
    description = (data.examKatas.exams_programs ?? []).filter((i) => i.programs_exam_slug === "kata");
    SEO($$renderer2, spread_props([seoProps]));
    $$renderer2.push(`<!----> `);
    HeaderPages($$renderer2, { title });
    $$renderer2.push(`<!----> `);
    PageContainer($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="max-w-xl w-full"><div class="card p-4 space-y-6"><p>${escape_html(description[0].description_exam)}</p> `);
        NavigationList($$renderer3, { items: navigationItems, icon: true });
        $$renderer3.push(`<!----></div></div>`);
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
