# 94. Binary Tree Inorder Traversal

Recursive DFS: left → root → right, or iterative with explicit stack.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def inorderTraversal(root):
    result = []
    def dfs(node):
        if not node: return
        dfs(node.left)
        result.append(node.val)
        dfs(node.right)
    dfs(root)
    return result
```

## TypeScript
```typescript
function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    };
    dfs(root);
    return result;
}
```

## Go
```go
func inorderTraversal(root *TreeNode) []int {
    result := []int{}
    var dfs func(*TreeNode)
    dfs = func(node *TreeNode) {
        if node == nil { return }
        dfs(node.Left)
        result = append(result, node.Val)
        dfs(node.Right)
    }
    dfs(root)
    return result
}
```
