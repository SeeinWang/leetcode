# 112. Path Sum

DFS: subtract node value from target at each step; return true if target reaches 0 at a leaf.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def hasPathSum(root, targetSum: int) -> bool:
    if not root: return False
    if not root.left and not root.right:
        return root.val == targetSum
    return (hasPathSum(root.left, targetSum - root.val) or
            hasPathSum(root.right, targetSum - root.val))
```

## TypeScript
```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    return hasPathSum(root.left, targetSum - root.val) ||
           hasPathSum(root.right, targetSum - root.val);
}
```

## Go
```go
func hasPathSum(root *TreeNode, targetSum int) bool {
    if root == nil { return false }
    if root.Left == nil && root.Right == nil { return root.Val == targetSum }
    return hasPathSum(root.Left, targetSum-root.Val) ||
           hasPathSum(root.Right, targetSum-root.Val)
}
```
