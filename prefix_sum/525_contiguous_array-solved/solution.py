"""
525. Contiguous Array
https://leetcode.com/problems/contiguous-array/

Given a binary array nums, return the maximum length of a contiguous subarray
with an equal number of 0 and 1.

Example 1:
    Input: nums = [0,1]
    Output: 2
    Explanation: [0, 1] has equal numbers of 0 and 1.

Example 2:
    Input: nums = [0,1,0]
    Output: 2
    Explanation: [0, 1] (or [1, 0]) is the longest with equal 0 and 1.

Constraints:
    1 <= nums.length <= 10^5
    nums[i] is either 0 or 1.
"""

from typing import List


class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
