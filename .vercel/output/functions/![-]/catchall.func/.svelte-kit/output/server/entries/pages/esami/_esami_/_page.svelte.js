import { h as fallback, e as ensure_array_like, d as attr, g as escape_html, c as bind_props, a as store_get, b as spread_props, u as unsubscribe_stores } from "../../../../chunks/root.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as SEO, P as PageContainer } from "../../../../chunks/PageContainer.js";
import { H as HeaderPages } from "../../../../chunks/HeaderPages.js";
import { A as ArrowRight } from "../../../../chunks/ArrowRight.js";
import { B as BlankLink } from "../../../../chunks/BlankLink.js";
function NavigationListNumber($$renderer, $$props) {
  let items = fallback($$props["items"], () => [], true);
  $$renderer.push(`<nav class="list-nav w-full"><ul><!--[-->`);
  const each_array = ensure_array_like(items);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let { title, href, blank } = each_array[i];
    $$renderer.push(`<li><a${attr("href", href)} class="hover:!variant-soft-surface"${attr("target", blank ? "_blank" : "")}><span class="badge variant-soft-primary shrink-0 w-6 h-6 text-xs">${escape_html(i + 1)}</span> <span class="flex-1 whitespace-normal text-sm">${escape_html(title)}</span> <span class="opacity-40 shrink-0">`);
    if (blank) {
      $$renderer.push("<!--[0-->");
      BlankLink($$renderer);
    } else {
      $$renderer.push("<!--[-1-->");
      ArrowRight($$renderer);
    }
    $$renderer.push(`<!--]--></span></a></li>`);
  }
  $$renderer.push(`<!--]--></ul></nav>`);
  bind_props($$props, { items });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let items;
    let data = $$props["data"];
    let title;
    let metadescription;
    let seoProps;
    items = (data.exams.exams_programs ?? []).sort((a, b) => {
      const aRef = a.programs_exam_slug;
      const bRef = b.programs_exam_slug;
      return aRef.sort - bRef.sort;
    }).map((i) => {
      const ref = i.programs_exam_slug;
      return {
        title: ref.name,
        href: `/esami/${data.exams.slug}/${ref.slug}`
      };
    });
    title = data.exams.name;
    metadescription = "Programma esame tecniche " + title + " Judo Italia";
    seoProps = {
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
        $$renderer3.push(`<div class="card p-4 max-w-xl w-full border border-surface-300-600-token">`);
        NavigationListNumber($$renderer3, { items });
        $$renderer3.push(`<!----></div>`);
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
