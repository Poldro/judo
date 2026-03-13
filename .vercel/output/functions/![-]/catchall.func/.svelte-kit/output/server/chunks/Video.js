import { d as attr, c as bind_props } from "./root.js";
function Video($$renderer, $$props) {
  let iframeSrc;
  let videoId = $$props["videoId"];
  iframeSrc = `https://www.youtube.com/embed/${videoId}`;
  $$renderer.push(`<div class="w-full max-4xl relative"><div class="w-full"><iframe class="w-full aspect-video" width="560" height="315"${attr("src", iframeSrc)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div></div>`);
  bind_props($$props, { videoId });
}
export {
  Video as V
};
