"""
304. Range Sum Query 2D - Immutable
https://leetcode.com/problems/range-sum-query-2d-immutable/

Given a 2D matrix, implement NumMatrix that supports:
  - sumRegion(row1, col1, row2, col2): sum of the rectangle from
    (row1, col1) to (row2, col2) inclusive.

Many queries will be made — preprocess so each query is fast.
"""


class NumMatrix:
    def __init__(self, matrix: list[list[int]]):
        m, n = len(matrix), len(matrix[0])
        sum_matrix = [[0] * (n+1) for _ in range(m+1)]
        for i in range(m):
            for j in range(n):
                sum_matrix[i+1][j+1] = sum_matrix[i+1][j] + \
                    sum_matrix[i][j+1] - sum[i][j] + matrix[i][j]
        self.sum_matrix = sum_matrix

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return self.sum_matrix[row2+1][col2+1] - self.sum_matrix[row1][col2+1] - self.sum_matrix[row2+1][col1] + self.sum_matrix[row1][col1]
