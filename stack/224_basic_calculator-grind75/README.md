# 224. Basic Calculator

Stack: push running result and sign before '('; on ')' pop and combine with stored result.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def calculate(s: str) -> int:
    stack = []
    result, num, sign = 0, 0, 1
    for c in s:
        if c.isdigit():
            num = num * 10 + int(c)
        elif c in '+-':
            result += sign * num
            num = 0
            sign = 1 if c == '+' else -1
        elif c == '(':
            stack.append(result)
            stack.append(sign)
            result, sign = 0, 1
        elif c == ')':
            result += sign * num
            num = 0
            result *= stack.pop()   # sign before (
            result += stack.pop()   # result before (
    return result + sign * num
```

## TypeScript
```typescript
function calculate(s: string): number {
    const stack: number[] = [];
    let result = 0, num = 0, sign = 1;
    for (const c of s) {
        if (c >= '0' && c <= '9') num = num * 10 + Number(c);
        else if (c === '+' || c === '-') { result += sign * num; num = 0; sign = c === '+' ? 1 : -1; }
        else if (c === '(') { stack.push(result); stack.push(sign); result = 0; sign = 1; }
        else if (c === ')') { result += sign * num; num = 0; result *= stack.pop()!; result += stack.pop()!; }
    }
    return result + sign * num;
}
```

## Go
```go
func calculate(s string) int {
    stack := []int{}
    result, num, sign := 0, 0, 1
    for _, c := range s {
        if c >= '0' && c <= '9' {
            num = num*10 + int(c-'0')
        } else if c == '+' || c == '-' {
            result += sign * num; num = 0
            if c == '+' { sign = 1 } else { sign = -1 }
        } else if c == '(' {
            stack = append(stack, result, sign)
            result, sign = 0, 1
        } else if c == ')' {
            result += sign * num; num = 0
            result *= stack[len(stack)-1]; stack = stack[:len(stack)-1]
            result += stack[len(stack)-1]; stack = stack[:len(stack)-1]
        }
    }
    return result + sign*num
}
```
