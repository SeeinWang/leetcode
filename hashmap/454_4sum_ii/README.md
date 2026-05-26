# 454. 4Sum II

Hash map: store all sums of nums1+nums2, then count complementary sums in nums3+nums4.

**Complexity:** Time O(n²), Space O(n²)

## Python
```python
def fourSumCount(nums1, nums2, nums3, nums4) -> int:
    count = {}
    for a in nums1:
        for b in nums2:
            count[a + b] = count.get(a + b, 0) + 1
    result = 0
    for c in nums3:
        for d in nums4:
            result += count.get(-(c + d), 0)
    return result
```

## TypeScript
```typescript
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const map = new Map<number, number>();
    for (const a of nums1)
        for (const b of nums2)
            map.set(a + b, (map.get(a + b) ?? 0) + 1);
    let result = 0;
    for (const c of nums3)
        for (const d of nums4)
            result += map.get(-(c + d)) ?? 0;
    return result;
}
```

## Go
```go
func fourSumCount(nums1 []int, nums2 []int, nums3 []int, nums4 []int) int {
    count := make(map[int]int)
    for _, a := range nums1 {
        for _, b := range nums2 {
            count[a+b]++
        }
    }
    result := 0
    for _, c := range nums3 {
        for _, d := range nums4 {
            result += count[-(c + d)]
        }
    }
    return result
}
```
