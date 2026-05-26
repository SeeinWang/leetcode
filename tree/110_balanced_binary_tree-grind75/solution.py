"""
110. Balanced Binary Tree
https://leetcode.com/problems/balanced-binary-tree/

Determine if a binary tree is height-balanced (depth of subtrees never differs by more than 1).

Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: true

Example 2:
    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false

Constraints:
    Nodes in [0, 5000]. -10^4 <= Node.val <= 10^4.
"""

from typing import Optional

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        pass
