# 889. Construct Binary Tree from Preorder and Postorder Traversal

Preorder's first is root, preorder's second is left subtree's root; locate it in postorder to size the split, recurse. Solution is not unique — return any valid tree.

**Complexity:** Time O(n), Space O(n)
