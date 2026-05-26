# 347. Top K Frequent Elements

Bucket sort by frequency for O(n) time.

**Complexity:** Time O(n), Space O(n)

## Python
```python
from collections import Counter

def topKFrequent(nums: list[int], k: int) -> list[int]:
    count = Counter(nums)
    bucket = [[] for _ in range(len(nums) + 1)]
    for num, freq in count.items(): bucket[freq].append(num)
    result = []
    for i in range(len(bucket)-1, 0, -1):
        result.extend(bucket[i])
        if len(result) >= k: break
    return result[:k]
```

## TypeScript
```typescript
function topKFrequent(nums: number[], k: number): number[] {
    const count = new Map<number,number>();
    for (const n of nums) count.set(n, (count.get(n)??0)+1);
    const bucket: number[][] = Array.from({length: nums.length+1}, ()=>[]);
    for (const [n, f] of count) bucket[f].push(n);
    const result: number[] = [];
    for (let i=bucket.length-1; i>=0&&result.length<k; i--) result.push(...bucket[i]);
    return result.slice(0, k);
}
```

## Go
```go
func topKFrequent(nums []int, k int) []int {
    count := make(map[int]int)
    for _, n := range nums { count[n]++ }
    bucket := make([][]int, len(nums)+1)
    for num, freq := range count { bucket[freq] = append(bucket[freq], num) }
    result := []int{}
    for i := len(bucket)-1; i>=0 && len(result)<k; i-- { result = append(result, bucket[i]...) }
    return result[:k]
}
```
