import { getCollection, CollectionEntry, getEntryBySlug } from 'astro:content';

export async function getAllBlogPosts(): Promise<CollectionEntry<"blog">[]> {
    const posts = await getCollection('blog');
    return filterAndOrderBlogPosts(posts);
}

export async function getBlogPost(post: string): Promise<CollectionEntry<'blog'> | undefined> {
    return await getEntryBySlug('blog', post);
}

export async function getAllBlogPostsRelatedTo(tag: CollectionEntry<"tag">): Promise<CollectionEntry<'blog'>[]> {
    const posts = await getCollection('blog', ({ data }) =>
        data.tags.includes(tag.slug)
    );
    return filterAndOrderBlogPosts(posts);
}

function filterAndOrderBlogPosts(blogPosts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
    return blogPosts
        .filter((b) => b.data.pubDate.getTime() < new Date().getTime())
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}