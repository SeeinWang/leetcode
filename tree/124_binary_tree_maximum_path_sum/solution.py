# 124. Binary Tree Maximum Path Sum
# https://leetcode.com/problems/binary-tree-maximum-path-sum/
#
# Find max sum over any path in the tree (connected nodes, each used once;
# doesn't need to touch root or leaves).
#
# DFS returns "single-branch gain" for the caller; a separate global tracks
# the best "bent" path that uses both children at the current node.
# Negative gains are clamped to 0.

from typing import Optional

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: 'TreeNode') -> int:
        # TODO
        return 0
