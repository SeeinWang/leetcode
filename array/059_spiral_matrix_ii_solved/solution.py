"""
59. Spiral Matrix II
https://leetcode.com/problems/spiral-matrix-ii/

Given a positive integer n, generate an n x n matrix filled with elements
from 1 to n^2 in spiral order.

Example:
    Input: n = 3
    Output: [[1,2,3],[8,9,4],[7,6,5]]

Constraints:
    1 <= n <= 20
"""

from typing import List


class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        result = [[0] * n for _ in range(n)]
        offset = 0
        count = 1
        end = n // 2
        while offset < end:
            boundary = n - 1 - offset
            for i in range(offset, boundary):
                result[offset][i] = count
                count += 1
            for j in range(offset, boundary):
                result[j][boundary] = count
                count += 1
            for i in range(boundary, offset, -1):
                result[boundary][i] = count
                count += 1
            for j in range(boundary, offset, -1):
                result[j][offset] = count
                count += 1
            offset += 1

        if n % 2 == 1:
            result[end][end] = count

        return result
