import { d as attr, c as bind_props, a as store_get, b as spread_props, u as unsubscribe_stores, e as ensure_array_like, k as attr_class, f as stringify, g as escape_html } from "../../../chunks/root.js";
import { p as page } from "../../../chunks/stores.js";
import { S as SEO, P as PageContainer } from "../../../chunks/PageContainer.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { H as HeaderPages } from "../../../chunks/HeaderPages.js";
function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let allTechniques;
    let data = $$props["data"];
    let query = "";
    allTechniques = data.flatMap((group) => (group.categories ?? []).flatMap((cat) => [
      ...(cat.techniques ?? []).map((t) => ({ ...t, group: group.name, category: cat.name })),
      ...(cat.sub_categories ?? []).flatMap((sub) => (sub.techniques ?? []).map((t) => ({
        ...t,
        group: group.name,
        category: `${cat.name} > ${sub.name}`
      })))
    ]));
    query.length > 1 ? allTechniques.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()) || t.category.toLowerCase().includes(query.toLowerCase())) : [];
    $$renderer2.push(`<div class="relative w-full max-w-sm"><input class="w-full px-3 py-2 rounded border border-surface-300-600-token bg-surface-50-950-token text-sm" type="search"${attr("value", query)} placeholder="Es. seoi-nage, te-waza,..."/> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { data });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let techniques, currentDivision, selectedCategoryData, items;
    let data = $$props["data"];
    const title = "Tecniche";
    const metadescription = `Nage-waza (投げ技): Tecniche di Lancio e Katame-waza (固技): Tecniche di Controllo. Tutte le tecniche ufficiali della International Judo Federation (IJF).`;
    const seoProps = {
      data,
      title,
      slug: store_get($$store_subs ??= {}, "$page", page).url.pathname,
      metadescription
    };
    let selectedDivision = null;
    let selectedCategory = null;
    function chunkArray(array, size) {
      const result = [];
      for (let i = 0; i < array.length; i += size) result.push(array.slice(i, i + size));
      return result;
    }
    techniques = data.techniques;
    if (techniques?.length && !selectedDivision) {
      selectedDivision = techniques[0].name;
    }
    currentDivision = techniques?.find((d) => d.name === selectedDivision) ?? null;
    selectedCategoryData = /* @__PURE__ */ (() => {
      return null;
    })();
    items = (selectedCategoryData?.techniques ?? []).map((t) => ({
      title: `${t.name} (${t.jpn_name})`,
      href: `/tecniche/${t.slug}`
    }));
    chunkArray(items, 6);
    SEO($$renderer2, spread_props([seoProps]));
    $$renderer2.push(`<!----> `);
    HeaderPages($$renderer2, { title });
    $$renderer2.push(`<!----> `);
    PageContainer($$renderer2, {
      children: ($$renderer3) => {
        Search($$renderer3, { data: techniques });
        $$renderer3.push(`<!----> <div class="flex gap-2 flex-wrap w-full max-w-2xl"><!--[-->`);
        const each_array = ensure_array_like(techniques);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let division = each_array[$$index];
          $$renderer3.push(`<button${attr_class(`btn flex-1 text-sm font-semibold ${stringify(selectedDivision === division.name ? "variant-filled" : "!variant-soft-surface border border-surface-300-600-token")}`)}>${escape_html(division.name)}</button>`);
        }
        $$renderer3.push(`<!--]--></div> `);
        if (currentDivision) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="w-full max-w-2xl space-y-5"><!--[-->`);
          const each_array_1 = ensure_array_like(currentDivision.categories);
          for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
            let category = each_array_1[$$index_2];
            const directTechs = category.techniques ?? [];
            const subs = category.sub_categories ?? [];
            if (directTechs.length > 0) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<button${attr_class(`chip w-full text-left px-4 py-3 rounded-lg border ${stringify(selectedCategory === category.name ? "border-primary-500 bg-primary-500/10 text-primary-500 font-semibold" : "border-surface-300-600-token !variant-soft-surface")}`)}>${escape_html(category.name)}</button>`);
            } else if (subs.length > 0) {
              $$renderer3.push("<!--[1-->");
              $$renderer3.push(`<div class="space-y-2"><p class="text-xs font-semibold uppercase tracking-wider opacity-50 px-1">${escape_html(category.name)}</p> <div class="flex flex-wrap gap-2"><!--[-->`);
              const each_array_2 = ensure_array_like(subs);
              for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
                let sub = each_array_2[$$index_1];
                $$renderer3.push(`<button${attr_class(`chip px-4 py-2 rounded-lg border text-sm ${stringify(selectedCategory === sub.name ? "border-primary-500 bg-primary-500/10 text-primary-500 font-semibold" : "border-surface-300-600-token !variant-soft-surface")}`)}>${escape_html(sub.name)}</button>`);
              }
              $$renderer3.push(`<!--]--></div></div>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
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
