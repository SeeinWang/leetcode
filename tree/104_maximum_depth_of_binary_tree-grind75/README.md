# 104. Maximum Depth of Binary Tree

1 + max(left depth, right depth).

**Complexity:** Time O(n), Space O(h)

## Python
```python
def maxDepth(root: TreeNode) -> int:
    if not root: return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))
```

## TypeScript
```typescript
function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

## Go
```go
func maxDepth(root *TreeNode) int {
    if root == nil { return 0 }
    l, r := maxDepth(root.Left), maxDepth(root.Right)
    if l > r { return l + 1 }
    return r + 1
}
```
