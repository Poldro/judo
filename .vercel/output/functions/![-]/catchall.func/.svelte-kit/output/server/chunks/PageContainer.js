import { j as head, c as bind_props, d as attr, h as fallback, b as spread_props, g as escape_html, l as slot } from "./root.js";
const defaultOgImage = "/_app/immutable/assets/jigoro-kano.CDa5_UNT.jpg";
function OpenGraph($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let absoluteImageUrl;
    let image = $$props["image"];
    let metadescription = $$props["metadescription"];
    let siteLanguage = $$props["siteLanguage"];
    let pageTitle = $$props["pageTitle"];
    let siteTitle = $$props["siteTitle"];
    let siteUrl = $$props["siteUrl"];
    let url = $$props["url"];
    absoluteImageUrl = image?.url?.startsWith("http") ? image.url : `${siteUrl}${image?.url}`;
    head("morgha", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta property="og:type" content="website"/> <meta property="og:site_name"${attr("content", siteTitle)}/> <meta property="og:locale"${attr("content", siteLanguage)}/> <meta property="og:url"${attr("content", url)}/> <meta property="og:title"${attr("content", pageTitle)}/> <meta property="og:description"${attr("content", metadescription)}/> `);
      if (image) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta property="og:image"${attr("content", absoluteImageUrl)}/> <meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="627"/> <meta property="og:image:alt"${attr("content", image.alt)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    bind_props($$props, {
      image,
      metadescription,
      siteLanguage,
      pageTitle,
      siteTitle,
      siteUrl,
      url
    });
  });
}
function Twitter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let author = $$props["author"];
    let twitterUsername = $$props["twitterUsername"];
    let image = $$props["image"];
    head("10ou9sx", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta name="twitter:card" content="summary_large_image"/> `);
      if (image) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta name="twitter:image"${attr("content", image.url)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (twitterUsername) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta name="twitter:creator"${attr("content", `@${twitterUsername}`)}/> <meta name="twitter:site"${attr("content", `@${twitterUsername}`)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <meta name="twitter:label1" content="Written by"/> <meta name="twitter:data1"${attr("content", author)}/>`);
    });
    bind_props($$props, { author, twitterUsername, image });
  });
}
function SEO($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const { author, siteLanguage, siteTitle, siteUrl, twitterUsername } = data?.globals;
    let metadescription = $$props["metadescription"];
    let slug = $$props["slug"];
    let title = $$props["title"];
    const defaultAlt = "Mezzo busto di Jigoro Kano, fondatore del Judo.";
    let featuredImage = fallback(
      $$props["featuredImage"],
      () => ({
        url: defaultOgImage,
        alt: defaultAlt,
        width: 672,
        height: 448,
        caption: "Jigoro Kano"
      }),
      true
    );
    const openGraphProps = {
      image: featuredImage,
      metadescription,
      siteLanguage,
      pageTitle: title,
      siteTitle,
      siteUrl,
      url: `${siteUrl}${slug}`
    };
    const { url, alt } = featuredImage;
    const twitterProps = { author, twitterUsername, image: { url, alt } };
    head("1ng5smy", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(siteTitle)} | ${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", metadescription)}/> <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/> <link rel="canonical"${attr("href", `${siteUrl}${slug}`)}/>`);
    });
    Twitter($$renderer2, spread_props([twitterProps]));
    $$renderer2.push(`<!----> `);
    OpenGraph($$renderer2, spread_props([openGraphProps]));
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data, metadescription, slug, title, featuredImage });
  });
}
function PageContainer($$renderer, $$props) {
  $$renderer.push(`<div class="flex-1 flex flex-col justify-start items-center gap-6 lg:gap-10 my-6 lg:my-10 mx-4 animate-page-in"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
}
export {
  PageContainer as P,
  SEO as S
};
