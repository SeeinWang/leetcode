# 235. Lowest Common Ancestor of a Binary Search Tree

Use BST property: if both p and q are less than root, go left; if both greater, go right; else root is LCA.

**Complexity:** Time O(h), Space O(h)

## Python
```python
def lowestCommonAncestor(root, p, q):
    if p.val < root.val and q.val < root.val:
        return lowestCommonAncestor(root.left, p, q)
    if p.val > root.val and q.val > root.val:
        return lowestCommonAncestor(root.right, p, q)
    return root
```

## TypeScript
```typescript
function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left!, p, q);
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right!, p, q);
    return root;
}
```

## Go
```go
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    if p.Val < root.Val && q.Val < root.Val { return lowestCommonAncestor(root.Left, p, q) }
    if p.Val > root.Val && q.Val > root.Val { return lowestCommonAncestor(root.Right, p, q) }
    return root
}
```
