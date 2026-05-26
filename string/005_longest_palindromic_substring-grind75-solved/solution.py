"""
5. Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

Example 1:
    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.

Example 2:
    Input: s = "cbbd"
    Output: "bb"

Constraints:
    * 1 <= s.length <= 1000
    * s consist of only digits and English letters.
"""


class Solution:
    def expand(s: str, l: int, r: int) -> str:
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l+1: r]

    def longestPalindrome(self, s: str) -> str:
        result = ''
        for i in range(len(s)):
            odd = self.expand(s, i, i)
            even = self.expand(s, i, i + 1)
            if len(odd) > len(result):
                result = odd
            if len(even) > len(result):
                result = even
        return result

