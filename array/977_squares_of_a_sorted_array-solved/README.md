# 977. Squares of a Sorted Array

Two pointers from both ends, fill result array from back to front with larger square.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def sortedSquares(nums: list[int]) -> list[int]:
    n = len(nums)
    result = [0] * n
    left, right, pos = 0, n - 1, n - 1
    while left <= right:
        if abs(nums[left]) > abs(nums[right]):
            result[pos] = nums[left] ** 2
            left += 1
        else:
            result[pos] = nums[right] ** 2
            right -= 1
        pos -= 1
    return result
```

## TypeScript
```typescript
function sortedSquares(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n);
    let left = 0, right = n - 1, pos = n - 1;
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[pos--] = nums[left] * nums[left];
            left++;
        } else {
            result[pos--] = nums[right] * nums[right];
            right--;
        }
    }
    return result;
}
```

## Go
```go
func sortedSquares(nums []int) []int {
    n := len(nums)
    result := make([]int, n)
    left, right, pos := 0, n-1, n-1
    for left <= right {
        if abs(nums[left]) > abs(nums[right]) {
            result[pos] = nums[left] * nums[left]
            left++
        } else {
            result[pos] = nums[right] * nums[right]
            right--
        }
        pos--
    }
    return result
}

func abs(x int) int {
    if x < 0 { return -x }
    return x
}
```
