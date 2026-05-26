# 128. Longest Consecutive Sequence

Hash set: for each sequence start (n-1 not in set), count length.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def longestConsecutive(nums: list[int]) -> int:
    num_set = set(nums)
    max_len = 0
    for num in num_set:
        if num - 1 not in num_set:
            length = 1
            while num + length in num_set: length += 1
            max_len = max(max_len, length)
    return max_len
```

## TypeScript
```typescript
function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let maxLen = 0;
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) length++;
            maxLen = Math.max(maxLen, length);
        }
    }
    return maxLen;
}
```

## Go
```go
func longestConsecutive(nums []int) int {
    set := make(map[int]bool)
    for _, n := range nums { set[n] = true }
    maxLen := 0
    for num := range set {
        if !set[num-1] {
            length := 1
            for set[num+length] { length++ }
            if length > maxLen { maxLen = length }
        }
    }
    return maxLen
}
```
