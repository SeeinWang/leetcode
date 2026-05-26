/*
 * 304. Range Sum Query 2D - Immutable
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 *
 * Given a 2D matrix, implement NumMatrix that supports:
 *   - sumRegion(row1, col1, row2, col2): sum of the rectangle from
 *     (row1, col1) to (row2, col2) inclusive.
 *
 * Many queries will be made — preprocess so each query is fast.
 */

class NumMatrix {
    sum: number[][];
    constructor(matrix: number[][]) {
        const m = matrix.length, n = matrix[0].length;
        this.sum = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.sum[i + 1][j + 1] = this.sum[i + 1][j] + this.sum[i][j + 1] + matrix[i][j] - this.sum[i][j]
            }
        }

    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.sum[row2 + 1][col2 + 1] - this.sum[row2 + 1][col1] - this.sum[row1][col2 + 1] + this.sum[row1][col1]
    }
}
