"""
290. Word Pattern
https://leetcode.com/problems/word-pattern/

Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between
a letter in pattern and a non-empty word in s.

Example 1: pattern="abba", s="dog cat cat dog" → true
Example 2: pattern="abba", s="dog cat cat fish" → false
Example 3: pattern="aaaa", s="dog cat cat dog" → false

Constraints:
    1 <= pattern.length <= 300
    1 <= s.length <= 3000
    pattern contains only lowercase English letters.
    s contains only lowercase English letters and spaces.
"""


class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split()
        if len(pattern) != len(words):
            return False
        p2w = {}
        w2p = {}
        for i in range(len(pattern)):
            p = pattern[i]
            w = words[i]
            if (p in p2w and p2w.get(p) != w) or (w in w2p and w2p.get(w) != p):
                return False
            p2w[p] = w
            w2p[w] = p
        return True
