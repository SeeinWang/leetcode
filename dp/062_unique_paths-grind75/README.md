# 62. Unique Paths

DP: dp[i][j] = unique paths to reach cell (i,j) = dp[i-1][j] + dp[i][j-1].

**Complexity:** Time O(m×n), Space O(n)

## Python
```python
def uniquePaths(m: int, n: int) -> int:
    dp = [1] * n
    for i in range(1, m):
        for j in range(1, n):
            dp[j] += dp[j - 1]
    return dp[n - 1]
```

## TypeScript
```typescript
function uniquePaths(m: number, n: number): number {
    const dp = new Array(n).fill(1);
    for (let i = 1; i < m; i++)
        for (let j = 1; j < n; j++)
            dp[j] += dp[j - 1];
    return dp[n - 1];
}
```

## Go
```go
func uniquePaths(m int, n int) int {
    dp := make([]int, n)
    for i := range dp { dp[i] = 1 }
    for i := 1; i < m; i++ {
        for j := 1; j < n; j++ { dp[j] += dp[j-1] }
    }
    return dp[n-1]
}
```
