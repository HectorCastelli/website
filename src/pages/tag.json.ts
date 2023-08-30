import { getAllTags } from "@lib/tags";

export async function get({ params, request }) {
  const tags = await getAllTags();
  return {
    body: JSON.stringify({
      name: 'Tags',
      tags: tags.map(t => t.slug),
    }),
  };
}