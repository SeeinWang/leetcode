# 349. Intersection of Two Arrays

Convert both arrays to sets, return the intersection.

**Complexity:** Time O(m+n), Space O(m+n)

## Python
```python
def intersection(nums1: list[int], nums2: list[int]) -> list[int]:
    return list(set(nums1) & set(nums2))
```

## TypeScript
```typescript
function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    return [...new Set(nums2.filter(n => set1.has(n)))];
}
```

## Go
```go
func intersection(nums1 []int, nums2 []int) []int {
    set := make(map[int]bool)
    for _, n := range nums1 { set[n] = true }
    seen := make(map[int]bool)
    result := []int{}
    for _, n := range nums2 {
        if set[n] && !seen[n] {
            result = append(result, n)
            seen[n] = true
        }
    }
    return result
}
```
