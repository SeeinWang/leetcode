"""
47. Permutations II
https://leetcode.com/problems/permutations-ii/

Backtracking with sort + same-level dedupe:
skip nums[i] if nums[i] == nums[i-1] and the previous duplicate is not used in current path.
"""

from typing import List

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        pass
