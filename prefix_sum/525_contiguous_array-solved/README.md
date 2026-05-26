# 525. Contiguous Array

**Trick:** treat `0` as `-1`, then "equal number of 0s and 1s" ⇔ "subarray sums to 0". Reduces to "longest subarray with sum 0" → prefix sum + hashmap storing **earliest index** of each prefix sum.

If the same prefix sum appears at index `i` and was first seen at `j`, then `nums[j+1..i]` sums to 0 → length = `i - j`.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def findMaxLength(nums: list[int]) -> int:
    seen = {0: -1}            # prefix_sum -> earliest index
    prefix_sum, best = 0, 0
    for i, num in enumerate(nums):
        prefix_sum += 1 if num == 1 else -1
        if prefix_sum in seen:
            best = max(best, i - seen[prefix_sum])
        else:
            seen[prefix_sum] = i
    return best
```

## TypeScript
```typescript
function findMaxLength(nums: number[]): number {
    const seen = new Map<number, number>([[0, -1]]);
    let prefixSum = 0, best = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i] === 1 ? 1 : -1;
        if (seen.has(prefixSum)) {
            best = Math.max(best, i - seen.get(prefixSum)!);
        } else {
            seen.set(prefixSum, i);
        }
    }
    return best;
}
```

## Go
```go
func findMaxLength(nums []int) int {
    seen := map[int]int{0: -1}
    prefixSum, best := 0, 0
    for i, num := range nums {
        if num == 1 {
            prefixSum++
        } else {
            prefixSum--
        }
        if j, ok := seen[prefixSum]; ok {
            if i-j > best {
                best = i - j
            }
        } else {
            seen[prefixSum] = i
        }
    }
    return best
}
```
