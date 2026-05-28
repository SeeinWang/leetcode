"""
79. Word Search
https://leetcode.com/problems/word-search/

Grid DFS + backtracking. From each cell, try 4 directions; temporarily mark
visited (e.g., set cell to '#'), recurse, then restore.
"""

from typing import List


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        pass
