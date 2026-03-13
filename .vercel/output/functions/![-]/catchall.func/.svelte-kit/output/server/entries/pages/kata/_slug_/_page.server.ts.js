import { d as directus } from "../../../../chunks/directus.js";
import { readItem } from "@directus/sdk";
const load = async ({ params }) => {
  const kata = await directus.request(readItem("kata", params.slug, {
    fields: ["*", { urls: [{ url_id: ["*"] }] }, { techniques: ["name", "slug"] }, { videos: [{ video_id: ["url_yt", "name", "alt"] }] }]
  }));
  return {
    kata
  };
};
export {
  load
};
