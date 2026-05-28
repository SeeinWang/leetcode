"""
40. Combination Sum II
https://leetcode.com/problems/combination-sum-ii/

Sort first. Standard backtracking with `start` index; recurse with `i + 1`
(each element used at most once). Same-level dedup: skip when
`i > start and candidates[i] == candidates[i-1]`.
"""

from typing import List


class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        pass
