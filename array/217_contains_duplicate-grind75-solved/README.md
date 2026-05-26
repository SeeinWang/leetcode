# 217. Contains Duplicate

Return true if any value appears at least twice.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def containsDuplicate(nums: list[int]) -> bool:
    return len(nums) != len(set(nums))
```

## TypeScript
```typescript
function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
}
```

## Go
```go
func containsDuplicate(nums []int) bool {
    seen := make(map[int]bool)
    for _, num := range nums {
        if seen[num] {
            return true
        }
        seen[num] = true
    }
    return false
}
```
