# 150. Evaluate Reverse Polish Notation

Stack: push numbers, pop two operands for each operator.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def evalRPN(tokens: list[str]) -> int:
    stack = []
    for token in tokens:
        if token in {'+', '-', '*', '/'}:
            b, a = stack.pop(), stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            else: stack.append(int(a / b))
        else:
            stack.append(int(token))
    return stack[0]
```

## TypeScript
```typescript
function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    for (const token of tokens) {
        if (['+','-','*','/'].includes(token)) {
            const b = stack.pop()!, a = stack.pop()!;
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else stack.push(Math.trunc(a / b));
        } else { stack.push(parseInt(token)); }
    }
    return stack[0];
}
```

## Go
```go
func evalRPN(tokens []string) int {
    stack := []int{}
    for _, token := range tokens {
        switch token {
        case "+", "-", "*", "/":
            b, a := stack[len(stack)-1], stack[len(stack)-2]
            stack = stack[:len(stack)-2]
            switch token {
            case "+": stack = append(stack, a+b)
            case "-": stack = append(stack, a-b)
            case "*": stack = append(stack, a*b)
            case "/": stack = append(stack, a/b)
            }
        default:
            num, _ := strconv.Atoi(token)
            stack = append(stack, num)
        }
    }
    return stack[0]
}
```
