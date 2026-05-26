# 541. Reverse String II

Iterate in steps of 2k; reverse the first k characters of each 2k-block.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def reverseStr(s: str, k: int) -> str:
    chars = list(s)
    for i in range(0, len(chars), 2 * k):
        chars[i:i+k] = chars[i:i+k][::-1]
    return ''.join(chars)
```

## TypeScript
```typescript
function reverseStr(s: string, k: number): string {
    const chars = s.split('');
    for (let i = 0; i < chars.length; i += 2 * k) {
        let left = i, right = Math.min(i + k - 1, chars.length - 1);
        while (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++; right--;
        }
    }
    return chars.join('');
}
```

## Go
```go
func reverseStr(s string, k int) string {
    chars := []byte(s)
    for i := 0; i < len(chars); i += 2 * k {
        left, right := i, min(i+k-1, len(chars)-1)
        for left < right {
            chars[left], chars[right] = chars[right], chars[left]
            left++; right--
        }
    }
    return string(chars)
}

func min(a, b int) int {
    if a < b { return a }
    return b
}
```
