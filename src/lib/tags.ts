import { getCollection, CollectionEntry } from 'astro:content';

// TODO: add test coverage to this set of functions

export async function getAllTags(): Promise<CollectionEntry<"tag">[]> {
    return await getCollection('tag');
}

export async function getAllPostsWithTag(tag:string): Promise<CollectionEntry<'blog'>[]> {
    return await getCollection('blog', ({ data }) => data.tags.includes(tag));
}

interface TagWithBlog {
    tag: CollectionEntry<"tag">;
    blog: CollectionEntry<"blog">[];
}

export async function getTagsWithPosts(): Promise<TagWithBlog[]> {
    const tags = await getAllTags();

    const tagsWithCounts = Promise.all(tags.flatMap(async (tag)=>({
        tag,
        blog: await getAllPostsWithTag(tag.slug)
    })));

    return tagsWithCounts;
}

export async function getTopTagsThenRemainder(topCount: number = 3): Promise<[string[], string[]]> {
    const tagsWithPosts = await getTagsWithPosts();
    const tagsRankedByCount = tagsWithPosts.sort((a, b) => b.blog.length - a.blog.length);
    const topTags = tagsRankedByCount.slice(0, topCount).map(tagWithBlog=>tagWithBlog.tag.slug);
    const remainderTags = tagsRankedByCount.slice(topCount).map(tagWithBlog=>tagWithBlog.tag.slug);
    return [topTags, remainderTags];
}