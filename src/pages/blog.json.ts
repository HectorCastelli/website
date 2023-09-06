import { getAllBlogPosts } from "@lib/blogs";

export async function GET({  }) {
  const posts = await getAllBlogPosts();
  return new Response(JSON.stringify({
      name: 'Blog Pages',
      posts: posts.map(p => p.slug),
    }));
}