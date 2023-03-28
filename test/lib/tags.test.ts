import { expect, test } from 'vitest';
import { getTagsOrderedByPostCount } from '../../src/lib/tags';
import { createPostWithTags } from '../fixtures.test';

test('Tags are returned with their post counts', () => {
    const posts = [
        ...[...Array(3)].map(_=>createPostWithTags(['a'])),
        ...[...Array(3)].map(_=>createPostWithTags(['b'])),
        ...[...Array(4)].map(_=>createPostWithTags(['c'])),
        ...[...Array(3)].map(_=>createPostWithTags(['d'])),
        ...[...Array(3)].map(_=>createPostWithTags(['a','b'])),
    ];

    expect(getTagsOrderedByPostCount(posts)).toStrictEqual({
        a: 6,
        b: 6,
        c: 4,
        d: 3
    });
})
