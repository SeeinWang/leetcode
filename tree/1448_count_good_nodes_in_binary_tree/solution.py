# 1448. Count Good Nodes in Binary Tree
# https://leetcode.com/problems/count-good-nodes-in-binary-tree/
#
# A node X is "good" if no node on the path from root to X has a value
# strictly greater than X.val. Count all good nodes.
#
# DFS, passing the running max along the path:
#   if node.val >= max_so_far: count it; recurse with max(max_so_far, node.val).

from typing import Optional

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: 'TreeNode') -> int:
        # TODO
        return 0
