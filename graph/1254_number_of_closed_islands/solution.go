/*
1254. Number of Closed Islands
https://leetcode.com/problems/number-of-closed-islands/

Given a 2D grid consisting of 0s (land) and 1s (water).  An island is a maximal
4-directionally connected group of 0s and a closed island is an island totally
(all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

Example 1:
    Input: grid = [
      [1,1,1,1,1,1,1,0],
      [1,0,0,0,0,1,1,0],
      [1,0,1,0,1,1,1,0],
      [1,0,0,0,0,1,0,1],
      [1,1,1,1,1,1,1,0]
    ]
    Output: 2

Example 2:
    Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
    Output: 1

Constraints:
    1 <= grid.length, grid[i].length <= 100
    0 <= grid[i][j] <= 1

NOTE: land = 0, water = 1 (反直觉，注意！)
*/

// Approach: DFS flood-fill 0-land. dfs 返回该岛是否"封闭"（不触边）。Time: O(m*n), Space: O(m*n)

func closedIsland(grid [][]int) int {

}
