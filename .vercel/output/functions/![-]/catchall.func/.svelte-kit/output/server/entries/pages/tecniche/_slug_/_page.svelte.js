import { h as fallback, d as attr, g as escape_html, c as bind_props, a as store_get, j as head, b as spread_props, u as unsubscribe_stores, e as ensure_array_like } from "../../../../chunks/root.js";
import { p as page } from "../../../../chunks/stores.js";
import { A as ArrowRight } from "../../../../chunks/ArrowRight.js";
import { B as BlankLink } from "../../../../chunks/BlankLink.js";
import { S as SEO, P as PageContainer } from "../../../../chunks/PageContainer.js";
import { H as HeaderPages } from "../../../../chunks/HeaderPages.js";
import { V as Video } from "../../../../chunks/Video.js";
import { h as html } from "../../../../chunks/html.js";
function ButtonLink($$renderer, $$props) {
  let title = $$props["title"];
  let href = $$props["href"];
  let blank = fallback($$props["blank"], false);
  $$renderer.push(`<a${attr("href", href)}${attr("target", blank ? "_blank" : "")} type="button" class="btn variant-filled"><span class="flex-auto">${escape_html(title)}</span> `);
  if (blank) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<span class="badge">`);
    BlankLink($$renderer);
    $$renderer.push(`<!----></span>`);
  } else {
    $$renderer.push("<!--[-1-->");
    $$renderer.push(`<span class="badge">`);
    ArrowRight($$renderer);
    $$renderer.push(`<!----></span>`);
  }
  $$renderer.push(`<!--]--></a>`);
  bind_props($$props, { title, href, blank });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let data = $$props["data"];
    let title;
    let metadescription;
    let videos;
    let seoProps;
    let jsonLd;
    function stripHtml(html2) {
      return html2?.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim() ?? "";
    }
    title = data.technique.name + " " + data.technique.jpn_name;
    metadescription = stripHtml(data.technique.description);
    videos = data.technique.videos;
    seoProps = {
      data,
      title,
      slug: store_get($$store_subs ??= {}, "$page", page).url.pathname,
      metadescription
    };
    jsonLd = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${data.technique.name} (${data.technique.jpn_name}) - Tecnica Judo`,
      name: data.technique.name,
      description: metadescription,
      inLanguage: "it",
      url: `${data.globals?.siteUrl}${store_get($$store_subs ??= {}, "$page", page).url.pathname}`,
      author: {
        "@type": "Organization",
        name: data.globals?.siteTitle ?? "Judo Italia"
      }
    });
    head("npmxq0", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`${html(`<script type="application/ld+json">${jsonLd}<\/script>`)}`);
    });
    SEO($$renderer2, spread_props([seoProps]));
    $$renderer2.push(`<!----> `);
    HeaderPages($$renderer2, { title });
    $$renderer2.push(`<!----> `);
    PageContainer($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="max-w-4xl w-full space-y-6 lg:space-y-10 flex flex-col justify-center items-center">`);
        if (videos.length > 0) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(videos);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let video = each_array[$$index];
            $$renderer3.push(`<div class="w-full">`);
            Video($$renderer3, { videoId: video.video_id.url_yt });
            $$renderer3.push(`<!----></div>`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="max-w-4xl w-full card p-4 space-y-6 lg:space-y-10 flex flex-col justify-center items-center"><div class="max-w-xl space-y-6"><h3 class="h3 font-semibold">${escape_html(title)} - ${escape_html(data.technique.it_name)}</h3> <div class="prose">${html(store_get($$store_subs ??= {}, "$page", page).data.technique.description)}</div> <div class="w-full flex justify-center">`);
        ButtonLink($$renderer3, {
          title: "International Judo Federation",
          href: data.technique.ifj_url,
          blank: true
        });
        $$renderer3.push(`<!----></div></div></div>`);
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
