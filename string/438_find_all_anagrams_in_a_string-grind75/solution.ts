/*
 * 438. Find All Anagrams in a String
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 *
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s.
 * You may return the answer in any order.
 *
 * Example 1:
 *     Input: s = "cbaebabacd", p = "abc"
 *     Output: [0,6]
 *     Explanation:
 *         The substring with start index = 0 is "cba", which is an anagram of "abc".
 *         The substring with start index = 6 is "bac", which is an anagram of "abc".
 *
 * Example 2:
 *     Input: s = "abab", p = "ab"
 *     Output: [0,1,2]
 *     Explanation:
 *         The substring with start index = 0 is "ab", which is an anagram of "ab".
 *         The substring with start index = 1 is "ba", which is an anagram of "ab".
 *         The substring with start index = 2 is "ab", which is an anagram of "ab".
 *
 * Constraints:
 *     * 1 <= s.length, p.length <= 3 * 10^4
 *     * s and p consist of lowercase English letters.
 */

function findAnagrams(s: string, p: string): number[] {
    if (p.length > s.length) return [];
    const result = []
    const count = new Array(26).fill(0)
    const a = 'a'.charCodeAt(0)
    for (const char of p) {
        count[char.charCodeAt(0) - a]++
    }
    for (let i = 0; i < p.length; i++) {
        count[s[i].charCodeAt(0) - a]--
    }
    if (count.every(count => count === 0)) result.push(0);
    let [left, right] = [1, p.length]
    while (right < s.length) {
        count[s[left - 1].charCodeAt(0) - a]++
        count[s[right].charCodeAt(0) - a]--;
        if (count.every(count => count === 0)) result.push(left);
        left++
        right++
    }
    return result

};
