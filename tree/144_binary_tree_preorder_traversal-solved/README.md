# 144. Binary Tree Preorder Traversal

Recursive DFS: root → left → right.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def preorderTraversal(root):
    result = []
    def dfs(node):
        if not node: return
        result.append(node.val)
        dfs(node.left)
        dfs(node.right)
    dfs(root)
    return result
```

## TypeScript
```typescript
function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return result;
}
```

## Go
```go
func preorderTraversal(root *TreeNode) []int {
    result := []int{}
    var dfs func(*TreeNode)
    dfs = func(node *TreeNode) {
        if node == nil { return }
        result = append(result, node.Val)
        dfs(node.Left)
        dfs(node.Right)
    }
    dfs(root)
    return result
}
```
