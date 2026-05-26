# 139. Word Break

DP: dp[i] = can first i chars be segmented; for each position check all words ending there.

**Complexity:** Time O(n²), Space O(n)

## Python
```python
def wordBreak(s: str, wordDict: list[str]) -> bool:
    word_set = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    return dp[len(s)]
```

## TypeScript
```typescript
function wordBreak(s: string, wordDict: string[]): boolean {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++)
        for (let j = 0; j < i; j++)
            if (dp[j] && wordSet.has(s.slice(j, i))) { dp[i] = true; break; }
    return dp[s.length];
}
```

## Go
```go
func wordBreak(s string, wordDict []string) bool {
    wordSet := make(map[string]bool)
    for _, w := range wordDict { wordSet[w] = true }
    dp := make([]bool, len(s)+1)
    dp[0] = true
    for i := 1; i <= len(s); i++ {
        for j := 0; j < i; j++ {
            if dp[j] && wordSet[s[j:i]] { dp[i] = true; break }
        }
    }
    return dp[len(s)]
}
```
