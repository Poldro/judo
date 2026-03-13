import { d as directus } from "../../../../chunks/directus.js";
import { readItem } from "@directus/sdk";
const load = async ({ params }) => {
  const exams = await directus.request(readItem("exams", params.esami, {
    fields: ["slug", "name", "description", { exams_programs: [{ programs_exam_slug: ["name", "slug", "sort"] }] }]
  }));
  return {
    exams
  };
};
export {
  load
};
