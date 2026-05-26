"""
438. Find All Anagrams in a String
https://leetcode.com/problems/find-all-anagrams-in-a-string/

Given two strings s and p, return an array of all the start indices of p's anagrams in s.
You may return the answer in any order.

Example 1:
    Input: s = "cbaebabacd", p = "abc"
    Output: [0, 6]
    Explanation:
        The substring with start index = 0 is "cba", which is an anagram of "abc".
        The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
    Input: s = "abab", p = "ab"
    Output: [0, 1, 2]
    Explanation:
        The substring with start index = 0 is "ab", which is an anagram of "ab".
        The substring with start index = 1 is "ba", which is an anagram of "ab".
        The substring with start index = 2 is "ab", which is an anagram of "ab".

Constraints:
    * 1 <= s.length, p.length <= 3 * 10^4
    * s and p consist of lowercase English letters.
"""

from typing import List


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if len(s) < len(p):
            return []
        result = []
        count = 0 * 26
        a = ord('a')
        for char in p:
            count[ord(char) - a] += 1
        for i in range(len(p)):
            count[ord(s[i]) - a] -= 1
        if all(c == 0 for c in count):
            result.append(0)
        left, right = 1, len(p)
        while right < len(s):
            count[ord(s[left-1]) - a] += 1
            count[ord(s[right]) - a] -= 1
            if all(c == 0 for c in count):
                result.append(left)
            left += 1
            right += 1
        return result
