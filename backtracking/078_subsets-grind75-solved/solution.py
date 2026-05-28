"""
78. Subsets
https://leetcode.com/problems/subsets/

Backtracking: for each element, choose to include or not include it.
"""

from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []

        def backTrack(start: int, temp: list[int]):
            result.append(temp[:])
            for i in range(start, len(nums)):
                temp.append(nums[i])
                backTrack(i+1, temp)
                temp.pop()
        backTrack(0, [])
        return result
