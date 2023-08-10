export function chunkString(source: string, chunkSize: number): string[] {
    const result: string[] = [];
    source.split(' ').forEach(word => {
        let lastEntry = result.pop();
        if (!lastEntry) {
            lastEntry = word;
        } else {
            lastEntry = [lastEntry, word].join(" ");
        }
        result.push(lastEntry);
        if (lastEntry.length >= chunkSize) {
            result.push('');
        }
    })
    return result.filter(x => x);
}