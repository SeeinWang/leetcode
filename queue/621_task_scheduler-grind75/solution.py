"""
621. Task Scheduler
https://leetcode.com/problems/task-scheduler/

Given tasks and a cooldown n, return the least number of intervals to finish all tasks.
Same tasks must be at least n units apart.

Example 1:
    Input: tasks = ["A","A","A","B","B","B"], n = 2
    Output: 8
    Explanation: A -> B -> idle -> A -> B -> idle -> A -> B

Example 2:
    Input: tasks = ["A","A","A","B","B","B"], n = 0
    Output: 6

Constraints:
    1 <= task.length <= 10^4
    tasks[i] is uppercase English letter.
    0 <= n <= 100
"""

from typing import List

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        pass
