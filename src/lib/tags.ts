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

export function getTopAndRemainder(allTags: Record<string, number>, topCount: number = 3): [string[], string[]] {
    const tagsRankedByCount = Object.keys(allTags)
        .sort((a: string, b: string) => allTags[b] - allTags[a]);
    const topTags = tagsRankedByCount.slice(0, topCount);
    const remainderTags = tagsRankedByCount.slice(topCount);
    return [topTags, remainderTags];
}