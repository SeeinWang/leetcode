# 700. Search in a Binary Search Tree

BST property: go left if val < root, right if val > root, return when equal.

**Complexity:** Time O(h), Space O(h)

## Python
```python
def searchBST(root, val):
    if not root or root.val == val: return root
    return searchBST(root.left if val < root.val else root.right, val)
```

## TypeScript
```typescript
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root || root.val === val) return root;
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
}
```

## Go
```go
func searchBST(root *TreeNode, val int) *TreeNode {
    if root == nil || root.Val == val { return root }
    if val < root.Val { return searchBST(root.Left, val) }
    return searchBST(root.Right, val)
}
```
