import type { MarkdownInstance } from "astro";

export function getTagsOrderedByPostCount(allPosts: MarkdownInstance<Record<string, any>>[]) {
    const tagsWithCounts: Record<string, number> = allPosts
        .flatMap((post) => post.frontmatter.tags)
        .reduce((acc, tag) => {
            acc[tag] = acc[tag] ? acc[tag] + 1 : 1;
            return acc;
        }, {});
        return tagsWithCounts;
}
