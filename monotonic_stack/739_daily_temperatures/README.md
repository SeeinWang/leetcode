# 739. Daily Temperatures

Monotonic decreasing stack of indices. Pop when current temp is warmer.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def dailyTemperatures(temperatures: list[int]) -> list[int]:
    answer = [0] * len(temperatures)
    stack = []
    for i, temp in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temp:
            idx = stack.pop()
            answer[idx] = i - idx
        stack.append(i)
    return answer
```

## TypeScript
```typescript
function dailyTemperatures(temperatures: number[]): number[] {
    const answer = new Array(temperatures.length).fill(0);
    const stack: number[] = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const idx = stack.pop()!;
            answer[idx] = i - idx;
        }
        stack.push(i);
    }
    return answer;
}
```

## Go
```go
func dailyTemperatures(temperatures []int) []int {
    answer := make([]int, len(temperatures))
    stack := []int{}
    for i, temp := range temperatures {
        for len(stack) > 0 && temperatures[stack[len(stack)-1]] < temp {
            idx := stack[len(stack)-1]
            stack = stack[:len(stack)-1]
            answer[idx] = i - idx
        }
        stack = append(stack, i)
    }
    return answer
}
```
