# 974. Subarray Sums Divisible by K

Prefix sum + hashmap on **remainders**. Two prefix sums with the same remainder mod k → the subarray between them is divisible by k. Normalize negatives with `((r % k) + k) % k`.

**Complexity:** Time O(n), Space O(k)

## Python
```python
from collections import defaultdict

def subarraysDivByK(nums: list[int], k: int) -> int:
    count, prefix_sum = 0, 0
    freq = defaultdict(int); freq[0] = 1
    for num in nums:
        prefix_sum += num
        r = prefix_sum % k  # Python % already returns non-negative for positive k
        count += freq[r]
        freq[r] += 1
    return count
```

## TypeScript
```typescript
function subarraysDivByK(nums: number[], k: number): number {
    let count=0, prefixSum=0;
    const freq = new Map([[0,1]]);
    for (const num of nums) {
        prefixSum += num;
        const r = ((prefixSum % k) + k) % k;
        count += freq.get(r) ?? 0;
        freq.set(r, (freq.get(r) ?? 0) + 1);
    }
    return count;
}
```

## Go
```go
func subarraysDivByK(nums []int, k int) int {
    count, prefixSum := 0, 0
    freq := map[int]int{0: 1}
    for _, num := range nums {
        prefixSum += num
        r := ((prefixSum % k) + k) % k
        count += freq[r]
        freq[r]++
    }
    return count
}
```
