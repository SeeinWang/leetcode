# 226. Invert Binary Tree

Recursively swap left and right children.

**Complexity:** Time O(n), Space O(h)

## Python
```python
def invertTree(root: TreeNode) -> TreeNode:
    if not root: return None
    root.left, root.right = invertTree(root.right), invertTree(root.left)
    return root
```

## TypeScript
```typescript
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
}
```

## Go
```go
func invertTree(root *TreeNode) *TreeNode {
    if root == nil { return nil }
    root.Left, root.Right = invertTree(root.Right), invertTree(root.Left)
    return root
}
```
