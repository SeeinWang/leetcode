/*
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 * Example 1:
 *     Input: s = "abcabcbb"
 *     Output: 3
 *     Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are
 *         also correct answers.
 *
 * Example 2:
 *     Input: s = "bbbbb"
 *     Output: 1
 *     Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 *     Input: s = "pwwkew"
 *     Output: 3
 *     Explanation: The answer is "wke", with the length of 3. Notice that the answer must be
 *         a substring, "pwke" is a subsequence and not a substring.
 *
 * Constraints:
 *     * 0 <= s.length <= 5 * 10^4
 *     * s consists of English letters, digits, symbols and spaces.
 */

function lengthOfLongestSubstring(s: string): number {
    let [left, right, max] = [0, 0, 0];
    const charSet = new Set()
    while (right < s.length) {
        while (left < right && charSet.has(s.charAt(right))) {
            charSet.delete(s.charAt(left))
            left++
        }
        charSet.add(s.charAt(right))
        max = Math.max(max, right - left + 1)
        right++
    }
    return max;
};
