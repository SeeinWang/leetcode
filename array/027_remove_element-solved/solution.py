"""
27. Remove Element
https://leetcode.com/problems/remove-element/

Given an integer array nums and an integer val, remove all occurrences of
val in nums in-place. Return the number of elements not equal to val.

Example 1:
    Input: nums = [3,2,2,3], val = 3
    Output: 2

Constraints:
    0 <= nums.length <= 100
    0 <= val <= 100
"""

from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        slow = 0
        for num in nums:
            if num != val:
                nums[slow] = num
                slow = slow + 1
        return slow
