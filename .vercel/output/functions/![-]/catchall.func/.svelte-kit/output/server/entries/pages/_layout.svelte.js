import "clsx";
import { c as bind_props, h as fallback, e as ensure_array_like, g as escape_html, d as attr, a as store_get, k as attr_class, f as stringify, u as unsubscribe_stores, j as head } from "../../chunks/root.js";
import { p as page } from "../../chunks/stores.js";
import { N as NavigationList } from "../../chunks/NavigationList.js";
function Hamburger($$renderer) {
  $$renderer.push(`<svg viewBox="0 0 100 80" class="fill-token w-4 h-4"><rect width="100" height="20"></rect><rect y="30" width="100" height="20"></rect><rect y="60" width="100" height="20"></rect></svg>`);
}
function Header($$renderer, $$props) {
  let handleClick = $$props["handleClick"];
  $$renderer.push(`<header class="flex items-center justify-between px-4 py-2.5 bg-surface-100-900-token border-b border-surface-300-600-token"><div class="flex items-center gap-2"><button class="lg:hidden btn btn-sm mr-1" aria-label="Open navigation">`);
  Hamburger($$renderer);
  $$renderer.push(`<!----></button> <a href="/" class="flex items-center gap-2"><span class="text-xl">🥋</span> <strong class="text-lg uppercase tracking-wide">Judo</strong></a></div></header>`);
  bind_props($$props, { handleClick });
}
function NavigationTechniques($$renderer, $$props) {
  let data = $$props["data"];
  let drawerClose = fallback($$props["drawerClose"], () => {
  });
  $$renderer.push(`<div class="space-y-1 text-sm"><!--[-->`);
  const each_array = ensure_array_like(data);
  for (let $$index_4 = 0, $$length = each_array.length; $$index_4 < $$length; $$index_4++) {
    let item = each_array[$$index_4];
    $$renderer.push(`<details class="svelte-190kdpi"><summary class="cursor-pointer list-none px-2 py-1.5 rounded hover:!variant-soft-surface font-medium flex items-center justify-between svelte-190kdpi"><span>${escape_html(item.name)}</span> <span class="indicator opacity-40 text-xs svelte-190kdpi">›</span></summary> <div class="ml-3 mt-1 space-y-1"><!--[-->`);
    const each_array_1 = ensure_array_like(item.categories || []);
    for (let $$index_3 = 0, $$length2 = each_array_1.length; $$index_3 < $$length2; $$index_3++) {
      let category = each_array_1[$$index_3];
      $$renderer.push(`<details class="svelte-190kdpi"><summary class="cursor-pointer list-none px-2 py-1 rounded hover:!variant-soft-surface flex items-center justify-between svelte-190kdpi"><span>${escape_html(category.name)}</span> <span class="indicator opacity-40 text-xs svelte-190kdpi">›</span></summary> <div class="ml-3 mt-1 space-y-1"><!--[-->`);
      const each_array_2 = ensure_array_like(category.sub_categories || []);
      for (let $$index_1 = 0, $$length3 = each_array_2.length; $$index_1 < $$length3; $$index_1++) {
        let subCategory = each_array_2[$$index_1];
        $$renderer.push(`<details class="svelte-190kdpi"><summary class="cursor-pointer list-none px-2 py-1 rounded hover:!variant-soft-surface text-xs flex items-center justify-between svelte-190kdpi"><span>${escape_html(subCategory.name)}</span> <span class="indicator opacity-40 text-xs svelte-190kdpi">›</span></summary> <div class="ml-3 mt-1 space-y-0.5"><!--[-->`);
        const each_array_3 = ensure_array_like(subCategory.techniques || []);
        for (let $$index = 0, $$length4 = each_array_3.length; $$index < $$length4; $$index++) {
          let technique = each_array_3[$$index];
          $$renderer.push(`<a${attr("href", `/tecniche/${technique.slug}`)} class="block px-2 py-1 rounded hover:!variant-soft-surface text-xs">${escape_html(technique.name)}</a>`);
        }
        $$renderer.push(`<!--]--></div></details>`);
      }
      $$renderer.push(`<!--]--> <!--[-->`);
      const each_array_4 = ensure_array_like(category.techniques || []);
      for (let $$index_2 = 0, $$length3 = each_array_4.length; $$index_2 < $$length3; $$index_2++) {
        let technique = each_array_4[$$index_2];
        $$renderer.push(`<a${attr("href", `/tecniche/${technique.slug}`)} class="block px-2 py-1 rounded hover:!variant-soft-surface text-xs">${escape_html(technique.name)}</a>`);
      }
      $$renderer.push(`<!--]--></div></details>`);
    }
    $$renderer.push(`<!--]--></div></details>`);
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { data, drawerClose });
}
function Navigation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let exams, katas, path;
    let data = $$props["data"];
    let drawerClose = $$props["drawerClose"];
    exams = data.exams.map((i) => ({ title: i.name, href: `/esami/${i.slug}` }));
    katas = data.katas.map((i) => ({ title: i.name, href: `/kata/${i.slug}` }));
    path = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    $$renderer2.push(`<div class="p-4 space-y-6"><div class="space-y-1"><a${attr_class(`flex items-center gap-2 px-2 py-1.5 rounded font-medium text-sm hover:!variant-soft-surface ${stringify(path.startsWith("/esami") ? "!variant-soft-primary" : "")}`)} href="/esami"><span>📖</span> Esami</a> `);
    if (path.startsWith("/esami")) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="ml-2">`);
      NavigationList($$renderer2, { items: exams, drawerClose });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="space-y-1"><a${attr_class(`flex items-center gap-2 px-2 py-1.5 rounded font-medium text-sm hover:!variant-soft-surface ${stringify(path.startsWith("/tecniche") ? "!variant-soft-primary" : "")}`)} href="/tecniche"><span>🥋</span> Tecniche</a> `);
    if (path.startsWith("/tecniche")) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="ml-2">`);
      NavigationTechniques($$renderer2, { data: data.techniques, drawerClose });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="space-y-1"><a${attr_class(`flex items-center gap-2 px-2 py-1.5 rounded font-medium text-sm hover:!variant-soft-surface ${stringify(path.startsWith("/kata") ? "!variant-soft-primary" : "")}`)} href="/kata"><span>🌊</span> Kata</a> `);
    if (path.startsWith("/kata")) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="ml-2">`);
      NavigationList($$renderer2, { items: katas, drawerClose });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data, drawerClose });
  });
}
function Analytics($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-PV28XWLV6J", {
          page_title: document.title,
          page_path: store_get($$store_subs ??= {}, "$page", page).url.pathname
        });
      }
    }
    head("17gyllr", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<script async="" src="https://analytics.eu.umami.is/script.js" data-website-id="5109ace0-7dd6-410a-9cf2-90e523d772f4"><\/script>`);
      $$renderer3.push(` `);
      $$renderer3.push(`<script async="" src="https://www.googletagmanager.com/gtag/js?id=G-PV28XWLV6J">
	<\/script>`);
      $$renderer3.push(` `);
      $$renderer3.push(`<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-PV28XWLV6J');
	<\/script>`);
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  let { data, children } = $$props;
  let drawerOpen = false;
  Analytics($$renderer);
  $$renderer.push(`<!----> `);
  if (drawerOpen) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="fixed inset-0 z-50 lg:hidden"><div class="absolute inset-0 bg-black/50" role="button" tabindex="0" aria-label="Close navigation"></div> <div class="absolute left-0 top-0 h-full w-72 bg-surface-50-950-token flex flex-col overflow-y-auto shadow-xl">`);
    Navigation($$renderer, { data, drawerClose: () => drawerOpen = false });
    $$renderer.push(`<!----></div></div>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <div class="h-screen flex flex-col overflow-hidden">`);
  Header($$renderer, { handleClick: () => drawerOpen = true });
  $$renderer.push(`<!----> <div class="flex flex-1 overflow-hidden"><aside class="hidden lg:block w-64 bg-surface-50-950-token overflow-y-auto border-r border-surface-300-600-token">`);
  Navigation($$renderer, { data, drawerClose: () => {
  } });
  $$renderer.push(`<!----></aside> <main class="flex-1 overflow-y-auto scroll-smooth">`);
  children?.($$renderer);
  $$renderer.push(`<!----></main></div></div>`);
}
export {
  _layout as default
};
