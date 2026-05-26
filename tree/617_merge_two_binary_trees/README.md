# 617. Merge Two Binary Trees

Recursively merge: if both nodes exist, sum values; otherwise return non-null node.

**Complexity:** Time O(min(m,n)), Space O(min(m,n))

## Python
```python
def mergeTrees(root1, root2):
    if not root1: return root2
    if not root2: return root1
    root1.val += root2.val
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    return root1
```

## TypeScript
```typescript
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1) return root2;
    if (!root2) return root1;
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
}
```

## Go
```go
func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
    if root1 == nil { return root2 }
    if root2 == nil { return root1 }
    root1.Val += root2.Val
    root1.Left = mergeTrees(root1.Left, root2.Left)
    root1.Right = mergeTrees(root1.Right, root2.Right)
    return root1
}
```
