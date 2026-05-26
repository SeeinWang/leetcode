"""
128. Longest Consecutive Sequence
https://leetcode.com/problems/longest-consecutive-sequence/

Given an unsorted array of integers nums, return the length of the longest
consecutive elements sequence. You must write an algorithm that runs in O(n) time.

Example 1:
    Input: nums = [100,4,200,1,3,2]
    Output: 4  ([1,2,3,4])

Example 2:
    Input: nums = [0,3,7,2,5,8,1,6,0,4]
    Output: 9

Constraints:
    0 <= nums.length <= 10^5
    -10^9 <= nums[i] <= 10^9
"""

from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        s = set(nums)
        max_len = 0
        for num in s:
            if num - 1 not in s:
                cur = num
                cur_len = 1
                while cur + 1 in s:
                    cur += 1
                    cur_len += 1
                max_len = max(cur_len, max_len)

        return max_len
