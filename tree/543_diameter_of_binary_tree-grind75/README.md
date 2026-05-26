# 543. Diameter of Binary Tree

At each node, diameter = left_depth + right_depth. Track global max.

**Complexity:** Time O(n), Space O(h)

## Python
```python
def diameterOfBinaryTree(root: TreeNode) -> int:
    max_d = [0]
    def depth(node):
        if not node: return 0
        l, r = depth(node.left), depth(node.right)
        max_d[0] = max(max_d[0], l + r)
        return 1 + max(l, r)
    depth(root)
    return max_d[0]
```

## TypeScript
```typescript
function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxD = 0;
    function depth(node: TreeNode | null): number {
        if (!node) return 0;
        const l = depth(node.left), r = depth(node.right);
        maxD = Math.max(maxD, l + r);
        return 1 + Math.max(l, r);
    }
    depth(root); return maxD;
}
```

## Go
```go
func diameterOfBinaryTree(root *TreeNode) int {
    maxD := 0
    var depth func(*TreeNode) int
    depth = func(node *TreeNode) int {
        if node == nil { return 0 }
        l, r := depth(node.Left), depth(node.Right)
        if l+r > maxD { maxD = l + r }
        if l > r { return l + 1 }; return r + 1
    }
    depth(root); return maxD
}
```
