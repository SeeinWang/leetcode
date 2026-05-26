"""
523. Continuous Subarray Sum
https://leetcode.com/problems/continuous-subarray-sum/

Given an integer array nums and an integer k, return true if nums has a good
subarray or false otherwise.

A good subarray is a subarray where:
    - its length is at least 2, and
    - the sum of the elements of the subarray is a multiple of k.

Note: a multiple of k includes 0 (e.g. 0, k, 2k, ...).

Example 1:
    Input: nums = [23,2,4,6,7], k = 6
    Output: true
    Explanation: [2,4] sums to 6, which is a multiple of 6.

Example 2:
    Input: nums = [23,2,6,4,7], k = 6
    Output: true
    Explanation: [23,2,6,4,7] sums to 42, a multiple of 6.

Example 3:
    Input: nums = [23,2,6,4,7], k = 13
    Output: false

Constraints:
    1 <= nums.length <= 10^5
    0 <= nums[i] <= 10^9
    0 <= sum(nums[i]) <= 2^31 - 1
    1 <= k <= 2^31 - 1
"""
from typing import List


class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        sum_map = {}
        sum_map[0] = -1
        sum = 0
        for i, num in enumerate(nums):
            sum = (sum + num) % k
            if sum in sum_map:
                if i - sum_map[sum] > 1:
                    return True
            else:
                sum_map[sum] = i

        return False
