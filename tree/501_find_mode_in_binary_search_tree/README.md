# 501. Find Mode in Binary Search Tree

Inorder traversal; track current streak and max streak, collect all values with max frequency.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def findMode(root):
    result, max_count, curr_count, prev = [], 0, 0, None
    def inorder(node):
        nonlocal max_count, curr_count, prev
        if not node: return
        inorder(node.left)
        curr_count = 1 if node.val != prev else curr_count + 1
        prev = node.val
        if curr_count > max_count:
            max_count = curr_count
            result.clear()
            result.append(node.val)
        elif curr_count == max_count:
            result.append(node.val)
        inorder(node.right)
    inorder(root)
    return result
```

## TypeScript
```typescript
function findMode(root: TreeNode | null): number[] {
    const result: number[] = [];
    let maxCount = 0, currCount = 0, prev: number | null = null;
    const inorder = (node: TreeNode | null) => {
        if (!node) return;
        inorder(node.left);
        currCount = node.val !== prev ? 1 : currCount + 1;
        prev = node.val;
        if (currCount > maxCount) { maxCount = currCount; result.length = 0; result.push(node.val); }
        else if (currCount === maxCount) result.push(node.val);
        inorder(node.right);
    };
    inorder(root);
    return result;
}
```

## Go
```go
func findMode(root *TreeNode) []int {
    result := []int{}
    maxCount, currCount := 0, 0
    var prev *int
    var inorder func(*TreeNode)
    inorder = func(node *TreeNode) {
        if node == nil { return }
        inorder(node.Left)
        if prev == nil || node.Val != *prev { currCount = 1 } else { currCount++ }
        prev = &node.Val
        if currCount > maxCount { maxCount = currCount; result = []int{node.Val} } else if currCount == maxCount { result = append(result, node.Val) }
        inorder(node.Right)
    }
    inorder(root)
    return result
}
```
