# 236. Lowest Common Ancestor of a Binary Tree

Post-order DFS: if current node is p or q, return it; LCA is where both left and right return non-null.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def lowestCommonAncestor(root, p, q):
    if not root or root == p or root == q:
        return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right: return root
    return left or right
```

## TypeScript
```typescript
function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left!, p, q);
    const right = lowestCommonAncestor(root.right!, p, q);
    if (left && right) return root;
    return left ?? right;
}
```

## Go
```go
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    if root == nil || root == p || root == q { return root }
    left := lowestCommonAncestor(root.Left, p, q)
    right := lowestCommonAncestor(root.Right, p, q)
    if left != nil && right != nil { return root }
    if left != nil { return left }
    return right
}
```
