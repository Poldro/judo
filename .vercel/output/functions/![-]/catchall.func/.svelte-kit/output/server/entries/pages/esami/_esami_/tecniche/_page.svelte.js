import { a as store_get, b as spread_props, u as unsubscribe_stores, c as bind_props, g as escape_html, e as ensure_array_like } from "../../../../../chunks/root.js";
import { p as page } from "../../../../../chunks/stores.js";
import { S as SEO, P as PageContainer } from "../../../../../chunks/PageContainer.js";
import { N as NavigationList } from "../../../../../chunks/NavigationList.js";
import { H as HeaderPages } from "../../../../../chunks/HeaderPages.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let data = $$props["data"];
    function filterTechniques(techniques, slugs2) {
      return techniques.map((tech) => {
        const allCategories = [];
        tech.categories?.forEach((cat) => {
          const filteredTechniques = cat.techniques?.filter((technique) => slugs2.includes(technique.slug)) ?? [];
          if (filteredTechniques.length > 0) {
            allCategories.push({ ...cat, techniques: filteredTechniques });
          }
          cat.sub_categories?.forEach((subCat) => {
            const filteredSubCatTechniques = subCat.techniques?.filter((technique) => slugs2.includes(technique.slug)) ?? [];
            if (filteredSubCatTechniques.length > 0) {
              allCategories.push({ name: subCat.name, techniques: filteredSubCatTechniques });
            }
          });
        });
        return { ...tech, categories: allCategories };
      }).filter((tech) => tech.categories.length > 0);
    }
    const slugs = (data.examTechniques.techniques ?? []).map((et) => et.techniques_slug.slug);
    const filteredData = filterTechniques(data.techniques, slugs);
    let title = "Tecniche";
    let metaTitle = "Programma esame tecniche Judo";
    let metadescription = "Programma esame tecniche Judo Italia";
    const seoProps = {
      data,
      title: metaTitle,
      slug: store_get($$store_subs ??= {}, "$page", page).url.pathname,
      metadescription
    };
    let description;
    description = (data.examTechniques.exams_programs ?? []).filter((i) => i.programs_exam_slug === "tecniche");
    SEO($$renderer2, spread_props([seoProps]));
    $$renderer2.push(`<!----> `);
    HeaderPages($$renderer2, { title });
    $$renderer2.push(`<!----> `);
    PageContainer($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="w-full max-w-4xl space-y-6"><p class="text-sm opacity-70">${escape_html(description[0].description_exam)}</p> <!--[-->`);
        const each_array = ensure_array_like(filteredData);
        for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
          let division = each_array[$$index_1];
          $$renderer3.push(`<div class="space-y-3"><h2 class="h2">${escape_html(division.name)}</h2> <div class="card border border-surface-300-600-token p-4"><div class="grid lg:grid-cols-2 gap-6"><!--[-->`);
          const each_array_1 = ensure_array_like(division.categories);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let category = each_array_1[$$index];
            if (category.techniques.length > 0) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<div class="space-y-2"><p class="text-xs font-semibold uppercase tracking-wider opacity-50">${escape_html(category.name)}</p> `);
              NavigationList($$renderer3, {
                icon: true,
                items: category.techniques.map((technique) => ({ title: technique.name, href: `/tecniche/${technique.slug}` }))
              });
              $$renderer3.push(`<!----></div>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></div></div></div>`);
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
