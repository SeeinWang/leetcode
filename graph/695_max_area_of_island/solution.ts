/*
 * 695. Max Area of Island
 * https://leetcode.com/problems/max-area-of-island/
 *
 * You are given an m x n binary matrix grid. An island is a group of 1's
 * (representing land) connected 4-directionally (horizontal or vertical).
 * You may assume all four edges of the grid are surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island.
 *
 * Return the maximum area of an island in grid. If there is no island, return 0.
 *
 * Example 1:
 *   Input: grid = [
 *     [0,0,1,0,0,0,0,1,0,0,0,0,0],
 *     [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *     [0,1,1,0,1,0,0,0,0,0,0,0,0],
 *     [0,1,0,0,1,1,0,0,1,0,1,0,0],
 *     [0,1,0,0,1,1,0,0,1,1,1,0,0],
 *     [0,0,0,0,0,0,0,0,0,0,1,0,0],
 *     [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *     [0,0,0,0,0,0,0,1,1,0,0,0,0]
 *   ]
 *   Output: 6
 *
 * Example 2:
 *   Input: grid = [[0,0,0,0,0,0,0,0]]
 *   Output: 0
 *
 * Constraints:
 *   - m == grid.length
 *   - n == grid[i].length
 *   - 1 <= m, n <= 50
 *   - grid[i][j] is either 0 or 1.
 */

// Approach: DFS flood-fill, accumulate area per island, track max. Time: O(m*n), Space: O(m*n)

function maxAreaOfIsland(grid: number[][]): number {
    let maxArea = 0
    let [m, n] = [grid.length, grid[0].length]

    function getMax(row: number, column: number): number {
        if (row < 0 || row >= m || column < 0 || column >= n || grid[row][column] === 0) return 0
        grid[row][column] = 0
        return 1 + getMax(row + 1, column) + getMax(row - 1, column) + getMax(row, column + 1) + getMax(row, column - 1)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const cur = getMax(i, j)
                maxArea = Math.max(cur, maxArea)
            }
        }
    }
    return maxArea
}
