"""
242. Valid Anagram
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

Example 2:
    Input: s = "rat", t = "car"
    Output: false

Constraints:
    * 1 <= s.length, t.length <= 5 * 10^4
    * s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
"""


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        count = [0] * 26
        a = ord('a')
        for i in range(len(s)):
            count[ord(s[i])-a] += 1
            count[ord(t[i])-a] -= 1

        return all(c == 0 for c in count)
