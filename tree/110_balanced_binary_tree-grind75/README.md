# 110. Balanced Binary Tree

Return -1 early if any subtree is unbalanced (bottom-up check).

**Complexity:** Time O(n), Space O(h)

## Python
```python
def isBalanced(root: TreeNode) -> bool:
    def check(node):
        if not node: return 0
        l = check(node.left)
        if l == -1: return -1
        r = check(node.right)
        if r == -1: return -1
        if abs(l - r) > 1: return -1
        return 1 + max(l, r)
    return check(root) != -1
```

## TypeScript
```typescript
function isBalanced(root: TreeNode | null): boolean {
    function check(node: TreeNode | null): number {
        if (!node) return 0;
        const l = check(node.left); if (l === -1) return -1;
        const r = check(node.right); if (r === -1) return -1;
        if (Math.abs(l - r) > 1) return -1;
        return 1 + Math.max(l, r);
    }
    return check(root) !== -1;
}
```

## Go
```go
func isBalanced(root *TreeNode) bool {
    var check func(*TreeNode) int
    check = func(node *TreeNode) int {
        if node == nil { return 0 }
        l := check(node.Left); if l == -1 { return -1 }
        r := check(node.Right); if r == -1 { return -1 }
        if l-r > 1 || r-l > 1 { return -1 }
        if l > r { return l + 1 }; return r + 1
    }
    return check(root) != -1
}
```
