"""
15. 3Sum
https://leetcode.com/problems/3sum/

Given an integer array nums, return all the unique triplets that sum to 0.

Example:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
"""

from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []
        for i, num in enumerate(nums):
            if num > 0:
                break
            if i > 0 and num == nums[i-1]:
                continue
            left, right = i+1, len(nums) - 1
            while left < right:
                sum = num + nums[left] + nums[right]
                if sum == 0:
                    result.append([num, nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif sum > 0:
                    right -= 1
                else:
                    left += 1

        return result
