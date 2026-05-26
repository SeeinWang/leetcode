# 209. Minimum Size Subarray Sum

Sliding window: expand right, shrink left while sum >= target, track minimum length.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def minSubArrayLen(target: int, nums: list[int]) -> int:
    left = 0
    total = 0
    min_len = float('inf')
    for right in range(len(nums)):
        total += nums[right]
        while total >= target:
            min_len = min(min_len, right - left + 1)
            total -= nums[left]
            left += 1
    return 0 if min_len == float('inf') else min_len
```

## TypeScript
```typescript
function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0, total = 0, minLen = Infinity;
    for (let right = 0; right < nums.length; right++) {
        total += nums[right];
        while (total >= target) {
            minLen = Math.min(minLen, right - left + 1);
            total -= nums[left++];
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
```

## Go
```go
func minSubArrayLen(target int, nums []int) int {
    left, total, minLen := 0, 0, math.MaxInt32
    for right := 0; right < len(nums); right++ {
        total += nums[right]
        for total >= target {
            if right-left+1 < minLen {
                minLen = right - left + 1
            }
            total -= nums[left]
            left++
        }
    }
    if minLen == math.MaxInt32 {
        return 0
    }
    return minLen
}
```
