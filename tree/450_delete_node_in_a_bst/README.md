# 450. Delete Node in a BST

Find node; if leaf delete directly, if one child replace with child, if two children replace with inorder successor.

**Complexity:** Time O(h), Space O(h)

## Python
```python
def deleteNode(root, key):
    if not root: return None
    if key < root.val:
        root.left = deleteNode(root.left, key)
    elif key > root.val:
        root.right = deleteNode(root.right, key)
    else:
        if not root.left: return root.right
        if not root.right: return root.left
        # Find inorder successor (leftmost of right subtree)
        successor = root.right
        while successor.left:
            successor = successor.left
        root.val = successor.val
        root.right = deleteNode(root.right, successor.val)
    return root
```

## TypeScript
```typescript
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;
    if (key < root.val) { root.left = deleteNode(root.left, key); }
    else if (key > root.val) { root.right = deleteNode(root.right, key); }
    else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let successor = root.right;
        while (successor.left) successor = successor.left;
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }
    return root;
}
```

## Go
```go
func deleteNode(root *TreeNode, key int) *TreeNode {
    if root == nil { return nil }
    if key < root.Val { root.Left = deleteNode(root.Left, key) } else if key > root.Val { root.Right = deleteNode(root.Right, key) } else {
        if root.Left == nil { return root.Right }
        if root.Right == nil { return root.Left }
        successor := root.Right
        for successor.Left != nil { successor = successor.Left }
        root.Val = successor.Val
        root.Right = deleteNode(root.Right, successor.Val)
    }
    return root
}
```
