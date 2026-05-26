# 1644. Lowest Common Ancestor of a Binary Tree II
# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/
#
# Same as 236, but p or q may NOT exist in the tree. Return None if either is missing.
# Key difference: cannot early-return on `root == p` — must traverse fully to confirm both exist.

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowestCommonAncestor(root, p, q):
    # TODO
    return None
