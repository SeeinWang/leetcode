/*
 * 5. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 *     Input: s = "babad"
 *     Output: "bab"
 *     Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 *     Input: s = "cbbd"
 *     Output: "bb"
 *
 * Constraints:
 *     * 1 <= s.length <= 1000
 *     * s consist of only digits and English letters.
 */

function expand(s: string, l: number, r: number): string {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return s.slice(l + 1, r)
}

function longestPalindrome(s: string): string {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let odd = expand(s, i, i);
        let even = expand(s, i, i + 1)
        if (odd.length > result.length) result = odd
        if (even.length > result.length) result = even
    }
    return result
};
