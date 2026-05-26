"""
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are
        also correct answers.

Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3. Notice that the answer must be
        a substring, "pwke" is a subsequence and not a substring.

Constraints:
    * 0 <= s.length <= 5 * 10^4
    * s consists of English letters, digits, symbols and spaces.
"""


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left, right, maxLen = 0, 0, 0
        char_set = set()
        while right < len(s):
            while left < right and s[right] in char_set:
                char_set.remove(s[left])
                left += 1
            char_set.add(s[right])
            maxLen = max(maxLen, right-left + 1)
            right += 1
        return maxLen
