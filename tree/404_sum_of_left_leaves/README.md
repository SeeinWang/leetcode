# 404. Sum of Left Leaves

DFS with a flag indicating whether current node is a left child; sum leaf values.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def sumOfLeftLeaves(root):
    def dfs(node, is_left):
        if not node: return 0
        if not node.left and not node.right:
            return node.val if is_left else 0
        return dfs(node.left, True) + dfs(node.right, False)
    return dfs(root, False)
```

## TypeScript
```typescript
function sumOfLeftLeaves(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null, isLeft: boolean): number => {
        if (!node) return 0;
        if (!node.left && !node.right) return isLeft ? node.val : 0;
        return dfs(node.left, true) + dfs(node.right, false);
    };
    return dfs(root, false);
}
```

## Go
```go
func sumOfLeftLeaves(root *TreeNode) int {
    var dfs func(*TreeNode, bool) int
    dfs = func(node *TreeNode, isLeft bool) int {
        if node == nil { return 0 }
        if node.Left == nil && node.Right == nil {
            if isLeft { return node.Val }
            return 0
        }
        return dfs(node.Left, true) + dfs(node.Right, false)
    }
    return dfs(root, false)
}
```
