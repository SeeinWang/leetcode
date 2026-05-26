/*
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Example 1:
 *     Input: s = "anagram", t = "nagaram"
 *     Output: true
 *
 * Example 2:
 *     Input: s = "rat", t = "car"
 *     Output: false
 *
 * Constraints:
 *     * 1 <= s.length, t.length <= 5 * 10^4
 *     * s and t consist of lowercase English letters.
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

function isAnagram(s: string, t: string): boolean {
    /* if (s.length !== t.length) return false;
    const charMap = new Map()
    for (const char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1)
    }
    for (const char of t) {
        if (charMap.has(char)) {
            const remain = charMap.get(char);
            if (remain > 1) {
                charMap.set(char, remain - 1)
            } else {
                charMap.delete(char)
            }
        } else {
            return false
        }
    }
    return true */
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0)
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - a]++
        count[t.charCodeAt(i) - a]--
    }
    return count.every(c => c === 0)
};
