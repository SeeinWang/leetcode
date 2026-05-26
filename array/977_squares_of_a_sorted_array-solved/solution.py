"""
977. Squares of a Sorted Array
https://leetcode.com/problems/squares-of-a-sorted-array/

Given an integer array nums sorted in non-decreasing order, return an array
of the squares of each number sorted in non-decreasing order.

Example:
    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]

Constraints:
    1 <= nums.length <= 10^4
    -10^4 <= nums[i] <= 10^4
"""

from typing import List


class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        if nums[0] >= 0:
            return [num * num for num in nums]
        elif nums[-1] <= 0:
            return [num * num for num in reversed(nums)]
        else:
            result = [0] * len(nums)
            left, right, i = 0, len(nums) - 1, len(nums) - 1
            while left <= right:
                if (abs(nums[left]) <= abs(nums[right])):
                    result[i] = nums[right] * nums[right]
                    i -= 1
                    right -= 1
                else:
                    result[i] = nums[left] * nums[left]
                    i -= 1
                    left += 1
            return result
