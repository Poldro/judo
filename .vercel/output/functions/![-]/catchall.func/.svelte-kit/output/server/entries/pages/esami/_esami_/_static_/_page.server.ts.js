import { d as directus } from "../../../../../chunks/directus.js";
import { readItem } from "@directus/sdk";
const load = async ({ params }) => {
  const programs = await directus.request(readItem("programs_exam", params.static, {
    /*   filter: {
          isDynamic: {
              _eq: false
          }
      } */
    fields: ["*", { urls: [{ url_id: ["*"] }] }]
  }));
  return {
    programs
  };
};
export {
  load
};
