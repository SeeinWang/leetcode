# 101. Symmetric Tree

Recursively check if left subtree mirrors right subtree: compare outer and inner pairs.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def isSymmetric(root):
    def mirror(left, right):
        if not left and not right: return True
        if not left or not right: return False
        return (left.val == right.val and
                mirror(left.left, right.right) and
                mirror(left.right, right.left))
    return mirror(root.left, root.right)
```

## TypeScript
```typescript
function isSymmetric(root: TreeNode | null): boolean {
    const mirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return left.val === right.val &&
            mirror(left.left, right.right) &&
            mirror(left.right, right.left);
    };
    return mirror(root?.left ?? null, root?.right ?? null);
}
```

## Go
```go
func isSymmetric(root *TreeNode) bool {
    var mirror func(*TreeNode, *TreeNode) bool
    mirror = func(left, right *TreeNode) bool {
        if left == nil && right == nil { return true }
        if left == nil || right == nil { return false }
        return left.Val == right.Val &&
            mirror(left.Left, right.Right) &&
            mirror(left.Right, right.Left)
    }
    return mirror(root.Left, root.Right)
}
```
