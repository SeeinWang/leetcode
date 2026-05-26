# 322. Coin Change

DP: build dp[0..amount] where dp[i] = min coins to make i; try each coin at each amount.

**Complexity:** Time O(amount × coins), Space O(amount)

## Python
```python
def coinChange(coins: list[int], amount: int) -> int:
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1
```

## TypeScript
```typescript
function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++)
        for (const coin of coins)
            if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    return dp[amount] === Infinity ? -1 : dp[amount];
}
```

## Go
```go
func coinChange(coins []int, amount int) int {
    dp := make([]int, amount+1)
    for i := range dp { dp[i] = amount + 1 }
    dp[0] = 0
    for i := 1; i <= amount; i++ {
        for _, coin := range coins {
            if coin <= i && dp[i-coin]+1 < dp[i] { dp[i] = dp[i-coin] + 1 }
        }
    }
    if dp[amount] > amount { return -1 }
    return dp[amount]
}
```
