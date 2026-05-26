# 222. Count Complete Tree Nodes

Compare left and right subtree heights; if equal, left is perfect (use formula), else recurse.

**Complexity:** Time O(log²n), Space O(log n)

## Python
```python
def countNodes(root):
    if not root: return 0
    left, right = root, root
    lh = rh = 0
    while left: left = left.left; lh += 1
    while right: right = right.right; rh += 1
    if lh == rh:
        return (1 << lh) - 1
    return 1 + countNodes(root.left) + countNodes(root.right)
```

## TypeScript
```typescript
function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    let left: TreeNode | null = root, right: TreeNode | null = root;
    let lh = 0, rh = 0;
    while (left) { left = left.left; lh++; }
    while (right) { right = right.right; rh++; }
    if (lh === rh) return (1 << lh) - 1;
    return 1 + countNodes(root.left) + countNodes(root.right);
}
```

## Go
```go
func countNodes(root *TreeNode) int {
    if root == nil { return 0 }
    left, right := root, root
    lh, rh := 0, 0
    for left != nil { left = left.Left; lh++ }
    for right != nil { right = right.Right; rh++ }
    if lh == rh { return (1 << lh) - 1 }
    return 1 + countNodes(root.Left) + countNodes(root.Right)
}
```
