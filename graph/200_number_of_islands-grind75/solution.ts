/*
 * 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are all
 * surrounded by water.
 *
 * Example 1:
 *   Input: grid = [
 *     ["1","1","1","1","0"],
 *     ["1","1","0","1","0"],
 *     ["1","1","0","0","0"],
 *     ["0","0","0","0","0"]
 *   ]
 *   Output: 1
 *
 * Example 2:
 *   Input: grid = [
 *     ["1","1","0","0","0"],
 *     ["1","1","0","0","0"],
 *     ["0","0","1","0","0"],
 *     ["0","0","0","1","1"]
 *   ]
 *   Output: 3
 *
 * Constraints:
 *   - m == grid.length
 *   - n == grid[i].length
 *   - 1 <= m, n <= 300
 *   - grid[i][j] is '0' or '1'.
 */

// Approach: DFS/BFS flood-fill, mark visited. Time: O(m*n), Space: O(m*n)

function numIslands(grid: string[][]): number {

    let res = 0
    let [m, n] = [grid.length, grid[0].length]

    function dfs(row: number, column: number) {
        if (row < 0 || row >= m || column < 0 || column >= n || grid[row][column] === '0') return;
        grid[row][column] = '0'
        dfs(row + 1, column)
        dfs(row - 1, column)
        dfs(row, column + 1)
        dfs(row, column - 1)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++
                dfs(i, j)
            }
        }
    }
    return res;
}
