"""
449. Serialize and Deserialize BST
https://leetcode.com/problems/serialize-and-deserialize-bst/

Design an algorithm to serialize and deserialize a BST. The encoded
string should be as compact as possible.
"""

from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Codec:
    def serialize(self, root: Optional[TreeNode]) -> str:
        pass

    def deserialize(self, data: str) -> Optional[TreeNode]:
        pass
