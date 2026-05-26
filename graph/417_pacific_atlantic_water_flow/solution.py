"""
417. Pacific Atlantic Water Flow
https://leetcode.com/problems/pacific-atlantic-water-flow/

Return coordinates where water can flow to both Pacific (top/left) and Atlantic (bottom/right) oceans.
Water flows from cell to neighbor if neighbor height <= current height.

Example 1:
    Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
    Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Constraints:
    1 <= m, n <= 200
    0 <= heights[i][j] <= 10^5
"""
