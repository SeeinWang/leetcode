# 654. Maximum Binary Tree

Find max element as root, recursively build left from elements before max, right from after.

**Complexity:** Time O(n²), Space O(n)

## Python
```python
def constructMaximumBinaryTree(nums):
    if not nums: return None
    max_idx = nums.index(max(nums))
    root = TreeNode(nums[max_idx])
    root.left = constructMaximumBinaryTree(nums[:max_idx])
    root.right = constructMaximumBinaryTree(nums[max_idx+1:])
    return root
```

## TypeScript
```typescript
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (!nums.length) return null;
    const maxIdx = nums.indexOf(Math.max(...nums));
    const root = new TreeNode(nums[maxIdx]);
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIdx));
    root.right = constructMaximumBinaryTree(nums.slice(maxIdx + 1));
    return root;
}
```

## Go
```go
func constructMaximumBinaryTree(nums []int) *TreeNode {
    if len(nums) == 0 { return nil }
    maxIdx := 0
    for i, v := range nums { if v > nums[maxIdx] { maxIdx = i } }
    root := &TreeNode{Val: nums[maxIdx]}
    root.Left = constructMaximumBinaryTree(nums[:maxIdx])
    root.Right = constructMaximumBinaryTree(nums[maxIdx+1:])
    return root
}
```
