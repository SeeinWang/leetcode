# 459. Repeated Substring Pattern

If s is a repeated pattern, then s appears in (s+s) after removing first and last character.

**Complexity:** Time O(n²), Space O(n)

## Python
```python
def repeatedSubstringPattern(s: str) -> bool:
    return s in (s + s)[1:-1]
```

## TypeScript
```typescript
function repeatedSubstringPattern(s: string): boolean {
    return (s + s).slice(1, -1).includes(s);
}
```

## Go
```go
func repeatedSubstringPattern(s string) bool {
    doubled := s + s
    return strings.Contains(doubled[1:len(doubled)-1], s)
}
```
