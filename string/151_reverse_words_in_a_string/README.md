# 151. Reverse Words in a String

Split by whitespace, filter empty strings, reverse the slice, join with single space.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def reverseWords(s: str) -> str:
    return ' '.join(reversed(s.split()))
```

## TypeScript
```typescript
function reverseWords(s: string): string {
    return s.trim().split(/\s+/).reverse().join(' ');
}
```

## Go
```go
func reverseWords(s string) string {
    words := strings.Fields(s)
    for i, j := 0, len(words)-1; i < j; i, j = i+1, j-1 {
        words[i], words[j] = words[j], words[i]
    }
    return strings.Join(words, " ")
}
```
