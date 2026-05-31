"""
733. Flood Fill
https://leetcode.com/problems/flood-fill/

An image is represented by an m x n integer grid image where image[i][j]
represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a
flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill:
    - Begin with the starting pixel and change its color to color.
    - Perform the same process for each pixel that is directly adjacent (pixels
      that share a side with the original pixel, either top, bottom, left, or
      right) and shares the same color as the starting pixel.
    - Keep repeating this process by checking neighboring pixels of the updated
      pixels and modifying their color if it matches the original color of the
      starting pixel.
    - The process stops when there are no more adjacent pixels of the original
      color to update.

Return the modified image after performing the flood fill.

Example 1:
    Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
    Output: [[2,2,2],[2,2,0],[2,0,1]]
    Explanation: From the center of the image with position (sr, sc) = (1, 1)
      (i.e., the red pixel), all pixels connected by a path of the same color
      as the starting pixel (i.e., the blue pixels) are colored with the new
      color. Note the bottom corner is not colored 2, because it is not
      4-directionally connected to the starting pixel.

Example 2:
    Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
    Output: [[0,0,0],[0,0,0]]
    Explanation: The starting pixel is already colored 0, so no changes are
      made to the image.

Constraints:
    m == image.length
    n == image[i].length
    1 <= m, n <= 50
    0 <= image[i][j], color < 2^16
    0 <= sr < m
    0 <= sc < n
"""
from typing import List


class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        # Approach: DFS/BFS from (sr,sc), recolor cells matching original. Time: O(m*n), Space: O(m*n)
        pass
