import { getCollection, type CollectionEntry, getEntryBySlug } from 'astro:content';

export async function getAllBlogPosts(): Promise<CollectionEntry<"blog">[]> {
    const posts = await getCollection('blog');
    return orderBlogPosts(filterFutureBlogPosts(posts));
}

export async function getBlogPost(post: string): Promise<CollectionEntry<'blog'> | undefined> {
    return await getEntryBySlug('blog', post);
}

export async function getAllBlogPostsRelatedTo(tag: CollectionEntry<"tag">): Promise<CollectionEntry<'blog'>[]> {
    const posts = await getCollection('blog', ({ data }) =>
        data.tags.includes(tag.slug)
    );
    return orderBlogPosts(filterFutureBlogPosts(posts));
}

function filterFutureBlogPosts(blogPosts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
    const buildTime = new Date().getTime()
    return orderBlogPosts(blogPosts.filter((b) => b.data.pubDate.getTime() < buildTime));
}

function orderBlogPosts(blogPosts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
    return blogPosts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}