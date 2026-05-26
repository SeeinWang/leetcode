"""
370. Range Addition (LeetCode Premium)
https://leetcode.com/problems/range-addition/

You are given an integer length and an array updates where
    updates[i] = [startIdx_i, endIdx_i, inc_i]

You have an array arr of length `length` with all zeros, and you have some
operation to apply on arr. In the i-th operation, you should increment all
the elements arr[startIdx_i], arr[startIdx_i + 1], ..., arr[endIdx_i] by
inc_i.

Return arr after applying all the updates.

Example 1:
    Input: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
    Output: [-2,0,3,5,3]

Constraints:
    1 <= length <= 10^5
    0 <= updates.length <= 10^4
    0 <= startIdx_i <= endIdx_i < length
    -1000 <= inc_i <= 1000
"""

from typing import List


class Solution:
    def getModifiedArray(self, length: int, updates: List[List[int]]) -> List[int]:
        res = [0] * length
        for update in updates:
            start, end, value = update[0], update[1], update[2]
            res[start] += value
            stop = end + 1
            if stop < length:
                res[stop] -= value

        s = 0
        for index, num in enumerate(res):
            s += num
            res[index] = s

        return res
