"""
733. Flood Fill
https://leetcode.com/problems/flood-fill/

Perform a flood fill on image starting from pixel (sr, sc).
Replace all 4-directionally connected same-color pixels with the new color.

Example 1:
    Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2
    Output: [[2,2,2],[2,2,0],[2,0,1]]

Example 2:
    Input: image = [[0,0,0],[0,0,0]], sr=0, sc=0, color=0
    Output: [[0,0,0],[0,0,0]]

Constraints:
    1 <= m, n <= 50
    0 <= image[i][j], color < 2^16
"""
