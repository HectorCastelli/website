import { describe, expect, test } from 'vitest';
import { chunkString, dateToMonthString } from '@lib/strings';

describe("String chunking", () => {
    test('Works on empty strings', () => {
        expect(chunkString("", 1)).toStrictEqual([]);
    });

    test('Cannot chunk single words', () => {
        expect(chunkString("word", 5)).toStrictEqual([
            "word"
        ]);
    });

    test('Chunks on whitespace', () => {
        expect(chunkString("one two", 3)).toStrictEqual([
            "one", "two"
        ]);
    });

    test('Chunks early if impossible size', () => {
        expect(chunkString("must chunk", 3)).toStrictEqual([
            "must", "chunk"
        ]);
    });
});

describe("Date to String conversion", () => {
    test('Uses the correct months', () => {
        expect(dateToMonthString(new Date('2023-01-01'))).toStrictEqual("January 23")
    });
});