import { d as directus } from "../../../../../chunks/directus.js";
import { readItem } from "@directus/sdk";
const load = async ({ params }) => {
  const programKata = await directus.request(
    readItem("programs_exam", "kata", {
      fields: ["slug", "name", "description"]
    })
  );
  const examKatas = await directus.request(
    readItem("exams", params.esami, {
      fields: [{ katas: [{ kata_slug: ["name", "slug"] }] }, { exams_programs: ["*"] }]
    })
  );
  return {
    programKata,
    examKatas
  };
};
export {
  load
};
