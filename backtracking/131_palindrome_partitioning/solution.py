"""
131. Palindrome Partitioning
https://leetcode.com/problems/palindrome-partitioning/

Backtracking on cut positions. At index `start`, try every end in
[start, n); if s[start:end+1] is a palindrome, take it as one piece
and recurse from end+1. Collect when start == n.
"""

from typing import List


class Solution:
    def partition(self, s: str) -> List[List[str]]:
        pass
