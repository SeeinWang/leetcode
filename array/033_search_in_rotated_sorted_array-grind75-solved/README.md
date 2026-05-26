# 33. Search in Rotated Sorted Array

Binary search: determine which half is sorted, then decide which half to search.

**Complexity:** Time O(log n), Space O(1)

## Python
```python
def search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:  # left half sorted
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # right half sorted
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
```

## TypeScript
```typescript
function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}
```

## Go
```go
func search(nums []int, target int) int {
    left, right := 0, len(nums)-1
    for left <= right {
        mid := (left + right) / 2
        if nums[mid] == target { return mid }
        if nums[left] <= nums[mid] {
            if nums[left] <= target && target < nums[mid] { right = mid - 1 } else { left = mid + 1 }
        } else {
            if nums[mid] < target && target <= nums[right] { left = mid + 1 } else { right = mid - 1 }
        }
    }
    return -1
}
```
