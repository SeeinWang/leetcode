# 560. Subarray Sum Equals K

Prefix sum + hashmap. Count how many times (prefixSum - k) appeared before.

**Complexity:** Time O(n), Space O(n)

## Python
```python
from collections import defaultdict

def subarraySum(nums: list[int], k: int) -> int:
    count, prefix_sum = 0, 0
    freq = defaultdict(int); freq[0] = 1
    for num in nums:
        prefix_sum += num
        count += freq[prefix_sum - k]
        freq[prefix_sum] += 1
    return count
```

## TypeScript
```typescript
function subarraySum(nums: number[], k: number): number {
    let count=0, prefixSum=0;
    const freq = new Map([[0,1]]);
    for (const num of nums) {
        prefixSum += num;
        count += freq.get(prefixSum-k) ?? 0;
        freq.set(prefixSum, (freq.get(prefixSum)??0)+1);
    }
    return count;
}
```

## Go
```go
func subarraySum(nums []int, k int) int {
    count, prefixSum := 0, 0
    freq := map[int]int{0: 1}
    for _, num := range nums {
        prefixSum += num
        count += freq[prefixSum-k]
        freq[prefixSum]++
    }
    return count
}
```
