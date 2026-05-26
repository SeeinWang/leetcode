# 238. Product of Array Except Self

Two-pass prefix/suffix product approach — no division needed.

**Complexity:** Time O(n), Space O(1) (excluding output array)

## Python
```python
def productExceptSelf(nums: list[int]) -> list[int]:
    n = len(nums)
    result = [1] * n
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result
```

## TypeScript
```typescript
function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
}
```

## Go
```go
func productExceptSelf(nums []int) []int {
    n := len(nums)
    result := make([]int, n)
    prefix := 1
    for i := 0; i < n; i++ {
        result[i] = prefix
        prefix *= nums[i]
    }
    suffix := 1
    for i := n - 1; i >= 0; i-- {
        result[i] *= suffix
        suffix *= nums[i]
    }
    return result
}
```
