# 108. Convert Sorted Array to Binary Search Tree

Pick middle element as root, recursively build left from left half, right from right half.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def sortedArrayToBST(nums):
    if not nums: return None
    mid = len(nums) // 2
    root = TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums[:mid])
    root.right = sortedArrayToBST(nums[mid+1:])
    return root
```

## TypeScript
```typescript
function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums.length) return null;
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
}
```

## Go
```go
func sortedArrayToBST(nums []int) *TreeNode {
    if len(nums) == 0 { return nil }
    mid := len(nums) / 2
    root := &TreeNode{Val: nums[mid]}
    root.Left = sortedArrayToBST(nums[:mid])
    root.Right = sortedArrayToBST(nums[mid+1:])
    return root
}
```
