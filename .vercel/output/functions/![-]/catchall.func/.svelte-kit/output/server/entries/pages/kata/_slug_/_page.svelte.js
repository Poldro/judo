import { a as store_get, j as head, b as spread_props, u as unsubscribe_stores, c as bind_props, e as ensure_array_like, g as escape_html, d as attr } from "../../../../chunks/root.js";
import { S as SEO, P as PageContainer } from "../../../../chunks/PageContainer.js";
import { V as Video } from "../../../../chunks/Video.js";
import { p as page } from "../../../../chunks/stores.js";
import { H as HeaderPages } from "../../../../chunks/HeaderPages.js";
import "clsx";
import { h as html } from "../../../../chunks/html.js";
function Download($$renderer) {
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg>`);
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
    title = data.kata.name + " " + data.kata.jpn_name;
    metadescription = stripHtml(data.kata.description);
    videos = data.kata.videos;
    seoProps = {
      data,
      title,
      slug: store_get($$store_subs ??= {}, "$page", page).url.pathname,
      metadescription
    };
    jsonLd = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${data.kata.name} - Kata Judo`,
      name: data.kata.name,
      description: metadescription,
      inLanguage: "it",
      url: `${data.globals?.siteUrl}${store_get($$store_subs ??= {}, "$page", page).url.pathname}`,
      author: {
        "@type": "Organization",
        name: data.globals?.siteTitle ?? "Judo Italia"
      }
    });
    head("1vxthea", $$renderer2, ($$renderer3) => {
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
        $$renderer3.push(`<!--]--></div> <div class="max-w-4xl w-full card p-4 space-y-6 lg:space-y-10 flex flex-col justify-center items-center"><div class="max-w-xl space-y-6"><h3 class="h3 font-semibold">${escape_html(title)} - ${escape_html(data.kata.traduction_name)}</h3> <div class="prose">${html(store_get($$store_subs ??= {}, "$page", page).data.kata.content)}</div> <div class="w-full flex justify-center">`);
        if (data.kata.pdf_url) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<a${attr("href", data.kata.pdf_url)} target="_blank" type="button" class="btn variant-filled"><span class="flex-auto">Download pdf</span> <span class="badge">`);
          Download($$renderer3);
          $$renderer3.push(`<!----></span></a>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div></div></div>`);
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
