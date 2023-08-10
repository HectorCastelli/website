import { assert, expect, test } from 'vitest';
import { chunkString } from './strings';

// Edit an assertion and save to see HMR in action

test('Cannot chunk single words', () => {
	expect(chunkString("word", 5)).toStrictEqual([
        "word"
    ]);
});

test('Chunks on whitespace', () => {
	expect(chunkString("one two", 3)).toStrictEqual([
        "one","two"
    ]);
});

test('Chunks early if impossible size', () => {
	expect(chunkString("must chunk", 3)).toStrictEqual([
        "must","chunk"
    ]);
});