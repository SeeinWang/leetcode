"""
253. Meeting Rooms II (LeetCode Premium)
https://leetcode.com/problems/meeting-rooms-ii/

Given an array of meeting time intervals where intervals[i] = [start_i, end_i],
return the minimum number of conference rooms required.

Example 1:
    Input: intervals = [[0,30],[5,10],[15,20]]
    Output: 2

Example 2:
    Input: intervals = [[7,10],[2,4]]
    Output: 1

Constraints:
    1 <= intervals.length <= 10^4
    0 <= start_i < end_i <= 10^6
"""

import heapq
from typing import List


class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[0])
        pq = []

        for start, end in intervals:
            if pq and pq[0] <= start:
                heapq.heappop(pq)
            heapq.heappush(pq, end)

        return len(pq)
