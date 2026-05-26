# 257. Binary Tree Paths

DFS with path string; append to results when leaf node is reached.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def binaryTreePaths(root):
    result = []
    def dfs(node, path):
        if not node: return
        path += str(node.val)
        if not node.left and not node.right:
            result.append(path)
        else:
            dfs(node.left, path + '->')
            dfs(node.right, path + '->')
    dfs(root, '')
    return result
```

## TypeScript
```typescript
function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];
    const dfs = (node: TreeNode | null, path: string) => {
        if (!node) return;
        path += node.val;
        if (!node.left && !node.right) result.push(path);
        else { dfs(node.left, path + '->'); dfs(node.right, path + '->'); }
    };
    dfs(root, '');
    return result;
}
```

## Go
```go
func binaryTreePaths(root *TreeNode) []string {
    result := []string{}
    var dfs func(*TreeNode, string)
    dfs = func(node *TreeNode, path string) {
        if node == nil { return }
        path += strconv.Itoa(node.Val)
        if node.Left == nil && node.Right == nil {
            result = append(result, path)
        } else {
            dfs(node.Left, path+"->")
            dfs(node.Right, path+"->")
        }
    }
    dfs(root, "")
    return result
}
```
