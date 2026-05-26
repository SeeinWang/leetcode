"""
349. Intersection of Two Arrays
https://leetcode.com/problems/intersection-of-two-arrays/

Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must be unique.

Example:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]
"""

from typing import List


class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return list(set(nums1) & set(nums2))
