"""
139. Word Break
https://leetcode.com/problems/word-break/

DP: dp[i] = can s[0..i] be segmented; check if any dp[j] is true and s[j..i] is in dict.
"""

from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        pass
