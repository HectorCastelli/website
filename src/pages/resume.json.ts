import { getCollection } from "astro:content";

export async function GET({ }) {
  const resume = await getCollection('resume');
  return new Response(JSON.stringify({
    name: 'Resumes',
    resumes: ["cv", ...resume.map(t => t.slug)],
  }));
}