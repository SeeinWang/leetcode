# 1047. Remove All Adjacent Duplicates In String

Use a stack: push each character; if top of stack equals current character, pop instead.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def removeDuplicates(s: str) -> str:
    stack = []
    for c in s:
        if stack and stack[-1] == c:
            stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)
```

## TypeScript
```typescript
function removeDuplicates(s: string): string {
    const stack: string[] = [];
    for (const c of s) {
        if (stack.length > 0 && stack[stack.length - 1] === c) stack.pop();
        else stack.push(c);
    }
    return stack.join('');
}
```

## Go
```go
func removeDuplicates(s string) string {
    stack := []byte{}
    for i := 0; i < len(s); i++ {
        if len(stack) > 0 && stack[len(stack)-1] == s[i] {
            stack = stack[:len(stack)-1]
        } else {
            stack = append(stack, s[i])
        }
    }
    return string(stack)
}
```
