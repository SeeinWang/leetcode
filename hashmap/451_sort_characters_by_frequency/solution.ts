/*
 * 451. Sort Characters By Frequency
 * https://leetcode.com/problems/sort-characters-by-frequency/
 *
 * Given a string s, sort it in decreasing order based on the frequency of the characters.
 * The frequency of a character is the number of times it appears in the string.
 *
 * Return the sorted string. If there are multiple answers, return any of them.
 *
 * Example 1:
 *     Input: s = "tree"
 *     Output: "eert"
 *
 * Example 2:
 *     Input: s = "cccaaa"
 *     Output: "aaaccc"
 *
 * Example 3:
 *     Input: s = "Aabb"
 *     Output: "bbAa"
 *
 * Constraints:
 *     - 1 <= s.length <= 5 * 10^5
 *     - s consists of uppercase and lowercase English letters and digits.
 */

function frequencySort(s: string): string {
    const freq = new Map<string, number>();
    for (const c of s) {
        freq.set(c, (freq.get(c) ?? 0) + 1);
    }

    // bucket[i] = chars that appear i times
    const buckets: string[][] = Array.from({ length: s.length + 1 }, () => []);
    for (const [c, count] of freq) {
        buckets[count].push(c);
    }

    const result: string[] = [];
    for (let i = buckets.length - 1; i >= 1; i--) {
        for (const c of buckets[i]) {
            result.push(c.repeat(i));
        }
    }
    return result.join("");
};
