# 8. String to Integer (atoi)

Trim leading spaces, read optional sign, accumulate digits, clamp result to 32-bit integer range.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def myAtoi(s: str) -> int:
    s = s.lstrip()
    if not s: return 0
    sign = -1 if s[0] == '-' else 1
    if s[0] in '+-': s = s[1:]
    result = 0
    for c in s:
        if not c.isdigit(): break
        result = result * 10 + int(c)
    result *= sign
    return max(-2**31, min(2**31 - 1, result))
```

## TypeScript
```typescript
function myAtoi(s: string): number {
    s = s.trimStart();
    if (!s) return 0;
    let sign = 1, i = 0;
    if (s[0] === '-' || s[0] === '+') { sign = s[0] === '-' ? -1 : 1; i++; }
    let result = 0;
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + Number(s[i++]);
    }
    result *= sign;
    return Math.max(-(2**31), Math.min(2**31 - 1, result));
}
```

## Go
```go
func myAtoi(s string) int {
    i := 0
    for i < len(s) && s[i] == ' ' { i++ }
    sign := 1
    if i < len(s) && (s[i] == '-' || s[i] == '+') {
        if s[i] == '-' { sign = -1 }
        i++
    }
    result := 0
    for i < len(s) && s[i] >= '0' && s[i] <= '9' {
        result = result*10 + int(s[i]-'0')
        i++
    }
    result *= sign
    if result > 1<<31-1 { return 1<<31 - 1 }
    if result < -(1 << 31) { return -(1 << 31) }
    return result
}
```
