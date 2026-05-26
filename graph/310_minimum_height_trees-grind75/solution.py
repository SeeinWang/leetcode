"""
310. Minimum Height Trees
https://leetcode.com/problems/minimum-height-trees/

A tree's height is the number of edges in the longest path from the root
to a leaf. Given n nodes labeled 0..n-1 and n-1 undirected edges, return
all root labels that produce trees of minimum height.

Example 1:
    Input: n=4, edges=[[1,0],[1,2],[1,3]]
    Output: [1]

Example 2:
    Input: n=6, edges=[[3,0],[3,1],[3,2],[3,4],[5,4]]
    Output: [3,4]

Constraints:
    1 <= n <= 2*10^4
    edges.length == n-1
    0 <= ai, bi < n
    All pairs (ai, bi) are distinct.
"""
from typing import List


class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        pass
