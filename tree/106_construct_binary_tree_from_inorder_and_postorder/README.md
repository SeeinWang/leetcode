# 106. Construct Binary Tree from Inorder and Postorder Traversal

Postorder's last element is root; find it in inorder to split subtrees, recurse.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def buildTree(inorder, postorder):
    if not postorder: return None
    root = TreeNode(postorder[-1])
    mid = inorder.index(postorder[-1])
    root.left = buildTree(inorder[:mid], postorder[:mid])
    root.right = buildTree(inorder[mid+1:], postorder[mid:-1])
    return root
```

## TypeScript
```typescript
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (!postorder.length) return null;
    const root = new TreeNode(postorder[postorder.length - 1]);
    const mid = inorder.indexOf(root.val);
    root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
    root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, -1));
    return root;
}
```

## Go
```go
func buildTree(inorder []int, postorder []int) *TreeNode {
    if len(postorder) == 0 { return nil }
    rootVal := postorder[len(postorder)-1]
    root := &TreeNode{Val: rootVal}
    mid := 0
    for i, v := range inorder { if v == rootVal { mid = i; break } }
    root.Left = buildTree(inorder[:mid], postorder[:mid])
    root.Right = buildTree(inorder[mid+1:], postorder[mid:len(postorder)-1])
    return root
}
```
