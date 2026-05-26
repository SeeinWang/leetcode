# 297. Serialize and Deserialize Binary Tree

Preorder DFS: serialize with comma-separated values and 'null' markers; deserialize by rebuilding in same order.

**Complexity:** Time O(n), Space O(n)

## Python
```python
class Codec:
    def serialize(self, root) -> str:
        result = []
        def dfs(node):
            if not node: result.append('null'); return
            result.append(str(node.val))
            dfs(node.left); dfs(node.right)
        dfs(root)
        return ','.join(result)

    def deserialize(self, data: str):
        vals = iter(data.split(','))
        def dfs():
            val = next(vals)
            if val == 'null': return None
            node = TreeNode(int(val))
            node.left = dfs(); node.right = dfs()
            return node
        return dfs()
```

## TypeScript
```typescript
function serialize(root: TreeNode | null): string {
    const result: string[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) { result.push('null'); return; }
        result.push(String(node.val));
        dfs(node.left); dfs(node.right);
    };
    dfs(root);
    return result.join(',');
}

function deserialize(data: string): TreeNode | null {
    const vals = data.split(',');
    let i = 0;
    const dfs = (): TreeNode | null => {
        if (vals[i] === 'null') { i++; return null; }
        const node = new TreeNode(Number(vals[i++]));
        node.left = dfs(); node.right = dfs();
        return node;
    };
    return dfs();
}
```

## Go
```go
func serialize(root *TreeNode) string {
    result := []string{}
    var dfs func(*TreeNode)
    dfs = func(node *TreeNode) {
        if node == nil { result = append(result, "null"); return }
        result = append(result, strconv.Itoa(node.Val))
        dfs(node.Left); dfs(node.Right)
    }
    dfs(root)
    return strings.Join(result, ",")
}

func deserialize(data string) *TreeNode {
    vals := strings.Split(data, ",")
    i := 0
    var dfs func() *TreeNode
    dfs = func() *TreeNode {
        if vals[i] == "null" { i++; return nil }
        val, _ := strconv.Atoi(vals[i]); i++
        node := &TreeNode{Val: val}
        node.Left = dfs(); node.Right = dfs()
        return node
    }
    return dfs()
}
```
