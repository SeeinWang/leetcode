/*
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 *     Input: s = "A man, a plan, a canal: Panama"
 *     Output: true
 *     Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 *     Input: s = "race a car"
 *     Output: false
 *     Explanation: "raceacar" is not a palindrome.
 *
 * Example 3:
 *     Input: s = " "
 *     Output: true
 *     Explanation: s is an empty string "" after removing non-alphanumeric characters.
 *         Since an empty string reads the same forward and backward, it is a palindrome.
 *
 * Constraints:
 *     * 1 <= s.length <= 2 * 10^5
 *     * s consists only of printable ASCII characters.
 */

function isAlphaumeric(c: string): boolean {
    return (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9')
}
function isPalindrome(s: string): boolean {
    let [left, right] = [0, s.length - 1]
    while (left <= right) {
        while (left <= right && !isAlphaumeric(s[left])) left++
        while (left <= right && !isAlphaumeric(s[right])) right--
        if (s[left].toLowerCase() === s[right].toLowerCase()) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
};
