# 530. Minimum Absolute Difference in BST

Inorder traversal gives sorted values; minimum difference is between adjacent elements.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def getMinimumDifference(root):
    vals = []
    def inorder(node):
        if not node: return
        inorder(node.left)
        vals.append(node.val)
        inorder(node.right)
    inorder(root)
    return min(vals[i+1] - vals[i] for i in range(len(vals)-1))
```

## TypeScript
```typescript
function getMinimumDifference(root: TreeNode | null): number {
    const vals: number[] = [];
    const inorder = (node: TreeNode | null) => {
        if (!node) return;
        inorder(node.left);
        vals.push(node.val);
        inorder(node.right);
    };
    inorder(root);
    let min = Infinity;
    for (let i = 1; i < vals.length; i++) min = Math.min(min, vals[i] - vals[i-1]);
    return min;
}
```

## Go
```go
func getMinimumDifference(root *TreeNode) int {
    vals := []int{}
    var inorder func(*TreeNode)
    inorder = func(node *TreeNode) {
        if node == nil { return }
        inorder(node.Left)
        vals = append(vals, node.Val)
        inorder(node.Right)
    }
    inorder(root)
    minDiff := math.MaxInt32
    for i := 1; i < len(vals); i++ {
        if vals[i]-vals[i-1] < minDiff { minDiff = vals[i] - vals[i-1] }
    }
    return minDiff
}
```
