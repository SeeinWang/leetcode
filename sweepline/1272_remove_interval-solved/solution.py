"""
1272. Remove Interval (LeetCode Premium)
https://leetcode.com/problems/remove-interval/

Given a sorted list of disjoint intervals, each intervals[i] = [a_i, b_i]
represents the interval [a_i, b_i). We also have a toBeRemoved interval
[start, end). Return a sorted list of intervals after removing toBeRemoved
from intervals.

Example 1:
    Input: intervals = [[0,2],[3,4],[5,7]], toBeRemoved = [1,6]
    Output: [[0,1],[6,7]]

Example 2:
    Input: intervals = [[0,5]], toBeRemoved = [2,3]
    Output: [[0,2],[3,5]]

Example 3:
    Input: intervals = [[-5,-4],[-3,-2],[1,2],[3,5],[8,9]], toBeRemoved = [-1,4]
    Output: [[-5,-4],[-3,-2],[4,5],[8,9]]

Constraints:
    1 <= intervals.length <= 10^4
    -10^9 <= a_i < b_i <= 10^9
"""

from typing import List


class Solution:
    def removeInterval(self, intervals: List[List[int]], toBeRemoved: List[int]) -> List[List[int]]:
        res = []
        for interval in intervals:
            if interval[0] >= toBeRemoved[1] or interval[1] <= toBeRemoved[0]:
                res.append(interval)
            else:
                if interval[0] < toBeRemoved[0]:
                    res.append([interval[0], toBeRemoved[0]])
                if interval[1] > toBeRemoved[1]:
                    res.append([toBeRemoved[1], interval[1]])
        return res
