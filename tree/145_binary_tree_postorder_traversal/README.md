# 145. Binary Tree Postorder Traversal

Recursive DFS: left → right → root.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def postorderTraversal(root):
    result = []
    def dfs(node):
        if not node: return
        dfs(node.left)
        dfs(node.right)
        result.append(node.val)
    dfs(root)
    return result
```

## TypeScript
```typescript
function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    };
    dfs(root);
    return result;
}
```

## Go
```go
func postorderTraversal(root *TreeNode) []int {
    result := []int{}
    var dfs func(*TreeNode)
    dfs = func(node *TreeNode) {
        if node == nil { return }
        dfs(node.Left)
        dfs(node.Right)
        result = append(result, node.Val)
    }
    dfs(root)
    return result
}
```
