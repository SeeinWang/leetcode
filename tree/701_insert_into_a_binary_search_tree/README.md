# 701. Insert into a Binary Search Tree

Traverse BST using value comparison; insert new node when reaching a null position.

**Complexity:** Time O(h), Space O(h)

## Python
```python
def insertIntoBST(root, val):
    if not root: return TreeNode(val)
    if val < root.val:
        root.left = insertIntoBST(root.left, val)
    else:
        root.right = insertIntoBST(root.right, val)
    return root
```

## TypeScript
```typescript
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return new TreeNode(val);
    if (val < root.val) root.left = insertIntoBST(root.left, val);
    else root.right = insertIntoBST(root.right, val);
    return root;
}
```

## Go
```go
func insertIntoBST(root *TreeNode, val int) *TreeNode {
    if root == nil { return &TreeNode{Val: val} }
    if val < root.Val { root.Left = insertIntoBST(root.Left, val) } else { root.Right = insertIntoBST(root.Right, val) }
    return root
}
```
