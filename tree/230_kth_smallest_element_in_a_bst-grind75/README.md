# 230. Kth Smallest Element in a BST

Inorder traversal of BST gives elements in sorted order; stop at the kth element.

**Complexity:** Time O(h+k), Space O(h)

## Python
```python
def kthSmallest(root, k: int) -> int:
    count = [0]
    result = [0]
    def inorder(node):
        if not node or count[0] >= k: return
        inorder(node.left)
        count[0] += 1
        if count[0] == k: result[0] = node.val
        inorder(node.right)
    inorder(root)
    return result[0]
```

## TypeScript
```typescript
function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0, result = 0;
    const inorder = (node: TreeNode | null) => {
        if (!node || count >= k) return;
        inorder(node.left);
        if (++count === k) result = node.val;
        inorder(node.right);
    };
    inorder(root);
    return result;
}
```

## Go
```go
func kthSmallest(root *TreeNode, k int) int {
    count, result := 0, 0
    var inorder func(*TreeNode)
    inorder = func(node *TreeNode) {
        if node == nil || count >= k { return }
        inorder(node.Left)
        count++
        if count == k { result = node.Val }
        inorder(node.Right)
    }
    inorder(root)
    return result
}
```
