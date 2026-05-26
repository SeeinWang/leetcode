# 75. Sort Colors

Dutch National Flag: three pointers low/mid/high; swap 0s to front, 2s to back.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def sortColors(nums: list[int]) -> None:
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1; mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
```

## TypeScript
```typescript
function sortColors(nums: number[]): void {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) { [nums[low], nums[mid]] = [nums[mid], nums[low]]; low++; mid++; }
        else if (nums[mid] === 1) { mid++; }
        else { [nums[mid], nums[high]] = [nums[high], nums[mid]]; high--; }
    }
}
```

## Go
```go
func sortColors(nums []int) {
    low, mid, high := 0, 0, len(nums)-1
    for mid <= high {
        if nums[mid] == 0 {
            nums[low], nums[mid] = nums[mid], nums[low]; low++; mid++
        } else if nums[mid] == 1 {
            mid++
        } else {
            nums[mid], nums[high] = nums[high], nums[mid]; high--
        }
    }
}
```
