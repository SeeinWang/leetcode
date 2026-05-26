from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# 314. Binary Tree Vertical Order Traversal
# https://leetcode.com/problems/binary-tree-vertical-order-traversal/
#
# Return the vertical order traversal of a binary tree's node values
# (column by column, left to right; within a column, top to bottom; same
# row & column → left to right).
# Example: [3,9,20,null,null,15,7] -> [[9],[3,15],[20],[7]]


class Solution:
    def verticalOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        pass
