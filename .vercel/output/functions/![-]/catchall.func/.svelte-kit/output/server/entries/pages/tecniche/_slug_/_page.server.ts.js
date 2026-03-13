import { d as directus } from "../../../../chunks/directus.js";
import { readItem } from "@directus/sdk";
const load = async ({ params }) => {
  const technique = await directus.request(
    readItem("techniques", params.slug, {
      fields: ["*", { videos: [{ video_id: ["url_yt", "name", "alt"] }] }]
    })
  );
  return {
    technique
  };
};
export {
  load
};
