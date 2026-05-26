# 169. Majority Element

Boyer-Moore Voting: track a candidate; increment count if same, decrement if different; reset when count hits 0.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def majorityElement(nums: list[int]) -> int:
    candidate, count = None, 0
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    return candidate
```

## TypeScript
```typescript
function majorityElement(nums: number[]): number {
    let candidate = 0, count = 0;
    for (const num of nums) {
        if (count === 0) candidate = num;
        count += num === candidate ? 1 : -1;
    }
    return candidate;
}
```

## Go
```go
func majorityElement(nums []int) int {
    candidate, count := 0, 0
    for _, num := range nums {
        if count == 0 { candidate = num }
        if num == candidate { count++ } else { count-- }
    }
    return candidate
}
```
