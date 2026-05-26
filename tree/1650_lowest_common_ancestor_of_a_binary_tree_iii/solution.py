# 1650. Lowest Common Ancestor of a Binary Tree III
# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
#
# Nodes have a `parent` pointer. Find LCA of p and q (no root given).
# Two-pointer trick (same as LC 160 Intersection of Two Linked Lists):
#   walk up from each; when you hit null, jump to the other start.
#   They meet at LCA after at most depth(p) + depth(q) steps.

class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None

def lowestCommonAncestor(p, q):
    # TODO
    return None
