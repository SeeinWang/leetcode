# 538. Convert BST to Greater Tree

Reverse inorder traversal (right → root → left) with running sum; update each node's value.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def convertBST(root):
    total = 0
    def reverse_inorder(node):
        nonlocal total
        if not node: return
        reverse_inorder(node.right)
        total += node.val
        node.val = total
        reverse_inorder(node.left)
    reverse_inorder(root)
    return root
```

## TypeScript
```typescript
function convertBST(root: TreeNode | null): TreeNode | null {
    let total = 0;
    const reverseInorder = (node: TreeNode | null) => {
        if (!node) return;
        reverseInorder(node.right);
        total += node.val;
        node.val = total;
        reverseInorder(node.left);
    };
    reverseInorder(root);
    return root;
}
```

## Go
```go
func convertBST(root *TreeNode) *TreeNode {
    total := 0
    var reverseInorder func(*TreeNode)
    reverseInorder = func(node *TreeNode) {
        if node == nil { return }
        reverseInorder(node.Right)
        total += node.Val
        node.Val = total
        reverseInorder(node.Left)
    }
    reverseInorder(root)
    return root
}
```
