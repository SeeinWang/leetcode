"""
209. Minimum Size Subarray Sum
https://leetcode.com/problems/minimum-size-subarray-sum/

Given an array of positive integers nums and a positive integer target,
return the minimal length of a subarray whose sum >= target. Return 0 if none.

Example:
    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2

Constraints:
    1 <= target <= 10^9
    1 <= nums.length <= 10^5
"""

from typing import List


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        minLen, left, right, sum = len(nums), 0, 0, 0
        while right < len(nums):
            sum += nums[right]
            while sum >= target and left <= right:
                minLen = min(minLen, right - left + 1)
                sum -= nums[left]
                left += 1
            right += 1

        return minLen if minLen < len(nums) + 1 else 0
