# 669. Trim a Binary Search Tree

Recurse; if node < low return trimmed right subtree, if node > high return trimmed left subtree.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def trimBST(root, low, high):
    if not root: return None
    if root.val < low: return trimBST(root.right, low, high)
    if root.val > high: return trimBST(root.left, low, high)
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
```

## TypeScript
```typescript
function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if (!root) return null;
    if (root.val < low) return trimBST(root.right, low, high);
    if (root.val > high) return trimBST(root.left, low, high);
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
}
```

## Go
```go
func trimBST(root *TreeNode, low int, high int) *TreeNode {
    if root == nil { return nil }
    if root.Val < low { return trimBST(root.Right, low, high) }
    if root.Val > high { return trimBST(root.Left, low, high) }
    root.Left = trimBST(root.Left, low, high)
    root.Right = trimBST(root.Right, low, high)
    return root
}
```
