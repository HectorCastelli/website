import { getAllTags } from "@lib/tags";

export async function GET({  }) {
  const tags = await getAllTags();
  return new Response(JSON.stringify({
    name: 'Tags',
    tags: tags.map(t => t.slug),
  }));
}