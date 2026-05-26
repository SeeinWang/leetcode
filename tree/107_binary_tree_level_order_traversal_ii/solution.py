from collections import deque
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# 107. Binary Tree Level Order Traversal II
# https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
#
# Bottom-up level order traversal — return levels from deepest to root.
# Example: [3,9,20,null,null,15,7] -> [[15,7],[9,20],[3]]


class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
