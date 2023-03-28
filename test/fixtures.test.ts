import type { MarkdownInstance } from "astro";
import { vi, expect, test } from 'vitest';

export function createPostWithTags(tags: string[]): MarkdownInstance<Record<string, any>> {
    return {
        frontmatter: {
            title: '',
            description: '',
            tags,
        },
        file: '',
        url: undefined,
        Content: vi.fn(),
        rawContent: vi.fn(),
        compiledContent: vi.fn(),
        getHeadings: vi.fn(),
        default: vi.fn(),
    }
}


test('Post generation for tests create the correct tags', () => {
    var fakePost = createPostWithTags(['a-tag']);
    expect(fakePost).toHaveProperty('frontmatter.tags', ['a-tag']);
});
