"""
LintCode 391. Number of Airplanes in the Sky
https://www.lintcode.com/problem/391/

Given a list of time intervals representing airplane takeoff/landing times,
return the maximum number of airplanes in the sky at the same time.

约定：如果一架飞机降落的同时另一架起飞，认为它们没有同时在天上。

Example 1:
    Input: [(1, 10), (2, 3), (5, 8), (4, 7)]
    Output: 3

Example 2:
    Input: [(1, 2), (2, 3), (3, 4)]
    Output: 1

Constraints:
    - 0 <= intervals.length <= 10^4
    - interval.start < interval.end
"""

from typing import List


class Interval:
    def __init__(self, start: int = 0, end: int = 0):
        self.start = start
        self.end = end


class Solution:
    def count_of_airplanes(self, airplanes: List[Interval]) -> int:
        points = [p for air in airplanes for p in (
            (air.start, 1), (air.end, -1))]
        points.sort()

        maxPlane, total = 0, 0

        for _, v in points:
            total += v
            maxPlane = max(maxPlane, total)

        return maxPlane
