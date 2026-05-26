# 5. Longest Palindromic Substring

Expand from each center (odd and even length palindromes).

**Complexity:** Time O(n²), Space O(1)

## Python
```python
def longestPalindrome(s: str) -> str:
    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]: l -= 1; r += 1
        return s[l+1:r]
    result = ""
    for i in range(len(s)):
        for p in [expand(i,i), expand(i,i+1)]:
            if len(p) > len(result): result = p
    return result
```

## TypeScript
```typescript
function longestPalindrome(s: string): string {
    function expand(l: number, r: number): string {
        while (l>=0&&r<s.length&&s[l]===s[r]){ l--; r++; }
        return s.slice(l+1, r);
    }
    let result='';
    for (let i=0; i<s.length; i++) {
        for (const p of [expand(i,i), expand(i,i+1)])
            if (p.length > result.length) result = p;
    }
    return result;
}
```

## Go
```go
func longestPalindrome(s string) string {
    expand := func(l, r int) string {
        for l>=0&&r<len(s)&&s[l]==s[r] { l--; r++ }
        return s[l+1:r]
    }
    result := ""
    for i:=0; i<len(s); i++ {
        for _, p := range []string{expand(i,i), expand(i,i+1)} {
            if len(p) > len(result) { result = p }
        }
    }
    return result
}
```
