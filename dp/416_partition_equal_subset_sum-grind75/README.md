# 416. Partition Equal Subset Sum

0/1 Knapsack DP: if total is odd, impossible; else find subset summing to total/2.

**Complexity:** Time O(n × sum/2), Space O(sum/2)

## Python
```python
def canPartition(nums: list[int]) -> bool:
    total = sum(nums)
    if total % 2 != 0: return False
    target = total // 2
    dp = {0}
    for num in nums:
        dp = dp | {s + num for s in dp}
    return target in dp
```

## TypeScript
```typescript
function canPartition(nums: number[]): boolean {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;
    const target = total / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (const num of nums)
        for (let j = target; j >= num; j--)
            dp[j] = dp[j] || dp[j - num];
    return dp[target];
}
```

## Go
```go
func canPartition(nums []int) bool {
    total := 0
    for _, n := range nums { total += n }
    if total%2 != 0 { return false }
    target := total / 2
    dp := make([]bool, target+1)
    dp[0] = true
    for _, num := range nums {
        for j := target; j >= num; j-- {
            dp[j] = dp[j] || dp[j-num]
        }
    }
    return dp[target]
}
```
