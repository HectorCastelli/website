import type { MarkdownInstance } from 'astro';
import { assert, expect, test, vi } from 'vitest';
import { getTopThreeTags } from '../../src/components/TagCloud.astro';
import { createPostWithTags } from '../fixtures.test';

test('Only the top three tags with most posts are displayed', () => {

    const posts = [
        ...[...Array(3)].map(_=>createPostWithTags(['a'])),
        ...[...Array(3)].map(_=>createPostWithTags(['b'])),
        ...[...Array(4)].map(_=>createPostWithTags(['c'])),
        ...[...Array(3)].map(_=>createPostWithTags(['d'])),
        ...[...Array(3)].map(_=>createPostWithTags(['a','b'])),
    ];

    expect(getTopThreeTags(posts)).toStrictEqual(['a', 'b', 'c']);
})
