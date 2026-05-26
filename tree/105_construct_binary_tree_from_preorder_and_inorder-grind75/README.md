# 105. Construct Binary Tree from Preorder and Inorder Traversal

Preorder's first element is root; find it in inorder to split left/right subtrees, recurse.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def buildTree(preorder, inorder):
    if not preorder: return None
    root = TreeNode(preorder[0])
    mid = inorder.index(preorder[0])
    root.left = buildTree(preorder[1:mid+1], inorder[:mid])
    root.right = buildTree(preorder[mid+1:], inorder[mid+1:])
    return root
```

## TypeScript
```typescript
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length) return null;
    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
}
```

## Go
```go
func buildTree(preorder []int, inorder []int) *TreeNode {
    if len(preorder) == 0 { return nil }
    root := &TreeNode{Val: preorder[0]}
    mid := 0
    for i, v := range inorder { if v == preorder[0] { mid = i; break } }
    root.Left = buildTree(preorder[1:mid+1], inorder[:mid])
    root.Right = buildTree(preorder[mid+1:], inorder[mid+1:])
    return root
}
```
