import { d as directus } from "../../chunks/directus.js";
import { readItems } from "@directus/sdk";
import { error } from "@sveltejs/kit";
const load = async ({ url }) => {
  const techniques = await directus.request(readItems("techniques_divisions", {
    fields: ["id", "name", "description", { categories: ["id", "name", "description", { sub_categories: ["id", "name", "description", { techniques: ["slug", "name", "jpn_name"] }] }, { techniques: ["slug", "name", "jpn_name"] }] }]
  }));
  const exams = await directus.request(readItems("exams", {
    fields: ["slug", "name"]
  }));
  const katas = await directus.request(readItems("kata", {
    sort: ["sort"],
    fields: ["slug", "name", "traduction_name", "description"]
  }));
  const globals = await directus.request(readItems("global", {
    fields: ["*"]
  }));
  if (!techniques || !exams || !katas || !globals) {
    throw error(500, "Something happened");
  }
  return {
    techniques,
    exams,
    katas,
    globals,
    currentPath: url.pathname
  };
};
export {
  load
};
