# 20. Valid Parentheses

Stack: push open brackets, pop and match on close brackets.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def isValid(s: str) -> bool:
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack
```

## TypeScript
```typescript
function isValid(s: string): boolean {
    const stack: string[] = [];
    const mapping: Record<string, string> = {')': '(', '}': '{', ']': '['};
    for (const char of s) {
        if (char in mapping) {
            const top = stack.pop() ?? '#';
            if (mapping[char] !== top) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
```

## Go
```go
func isValid(s string) bool {
    stack := []rune{}
    mapping := map[rune]rune{')': '(', '}': '{', ']': '['}
    for _, char := range s {
        if open, ok := mapping[char]; ok {
            if len(stack) == 0 || stack[len(stack)-1] != open { return false }
            stack = stack[:len(stack)-1]
        } else {
            stack = append(stack, char)
        }
    }
    return len(stack) == 0
}
```
