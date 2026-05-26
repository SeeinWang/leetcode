# 98. Validate Binary Search Tree

Pass valid range [min, max] to each node; every node must be strictly within its range.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def isValidBST(root):
    def validate(node, min_val, max_val):
        if not node: return True
        if node.val <= min_val or node.val >= max_val: return False
        return (validate(node.left, min_val, node.val) and
                validate(node.right, node.val, max_val))
    return validate(root, float('-inf'), float('inf'))
```

## TypeScript
```typescript
function isValidBST(root: TreeNode | null): boolean {
    const validate = (node: TreeNode | null, min: number, max: number): boolean => {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };
    return validate(root, -Infinity, Infinity);
}
```

## Go
```go
func isValidBST(root *TreeNode) bool {
    var validate func(*TreeNode, int, int) bool
    validate = func(node *TreeNode, min, max int) bool {
        if node == nil { return true }
        if node.Val <= min || node.Val >= max { return false }
        return validate(node.Left, min, node.Val) && validate(node.Right, node.Val, max)
    }
    return validate(root, math.MinInt64, math.MaxInt64)
}
```
