"""
1235. Maximum Profit in Job Scheduling
https://leetcode.com/problems/maximum-profit-in-job-scheduling/

We have n jobs where job i has startTime[i], endTime[i], and profit[i].
Return the maximum profit you can obtain by doing non-overlapping jobs.

Example 1:
    Input: startTime=[1,2,3,3], endTime=[3,4,5,6], profit=[50,10,40,70]
    Output: 120  (jobs 0 and 3)

Example 2:
    Input: startTime=[1,2,3,4,6], endTime=[3,5,10,6,9], profit=[20,20,100,70,60]
    Output: 150

Constraints:
    1 <= startTime.length == endTime.length == profit.length <= 5*10^4
    1 <= startTime[i] < endTime[i] <= 10^9
    1 <= profit[i] <= 10^4
"""
from typing import List


class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        pass
