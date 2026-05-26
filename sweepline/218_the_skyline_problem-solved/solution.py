"""
218. The Skyline Problem
https://leetcode.com/problems/the-skyline-problem/

A city's skyline is the outer contour of the silhouette formed by all the
buildings in that city when viewed from a distance. Given the locations
and heights of all the buildings, return the skyline formed by these
buildings collectively.

The geometric information of each building is given in the array
buildings where buildings[i] = [left_i, right_i, height_i].

The skyline should be represented as a list of "key points" sorted by
their x-coordinate in the form [[x_1, y_1], [x_2, y_2], ...]. Each key
point is the left endpoint of some horizontal segment in the skyline
except the last point, which has y-coordinate 0 and marks termination.

There must be no consecutive horizontal lines of equal height in the
output.

Example 1:
    Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
    Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]

Example 2:
    Input: buildings = [[0,2,3],[2,5,3]]
    Output: [[0,3],[5,0]]

Constraints:
    1 <= buildings.length <= 10^4
    0 <= left_i < right_i <= 2^31 - 1
    1 <= height_i <= 2^31 - 1
    buildings is sorted by left_i in non-decreasing order.
"""

import heapq
from collections import defaultdict
from typing import List


class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        # 事件编码：起点 (L, -H)，终点 (R, +H)
        # 默认元组排序刚好满足所有 tie-break：
        #   - 同 x 起点先于终点 (-h < +h)
        #   - 同 x 多个起点：高的先入 (-高 < -低)
        #   - 同 x 多个终点：低的先删 (低 < 高)
        events = []
        for l, r, h in buildings:
            events.append((l, -h))
            events.append((r, h))
        events.sort()

        # max-heap 用负数模拟；放哨兵 0 代表地面，保证堆永远非空
        heap = [0]
        dead = defaultdict(int)  # 高度 -> 待删次数（惰性删除标记）
        res = []
        prev = 0

        for x, sh in events:
            if sh < 0:
                heapq.heappush(heap, sh)  # 起点：加入（已是负数）
            else:
                dead[sh] += 1  # 终点：标记删除（sh 已是正高度）

            # 清理堆顶已经死掉的元素
            while dead[-heap[0]] > 0:
                dead[-heap[0]] -= 1
                heapq.heappop(heap)

            cur = -heap[0]
            if cur != prev:
                res.append([x, cur])
                prev = cur

        return res
