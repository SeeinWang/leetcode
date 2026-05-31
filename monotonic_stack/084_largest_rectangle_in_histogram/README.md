# 84. Largest Rectangle in Histogram

Monotonic **increasing** stack of indices. When a shorter bar arrives, pop taller
bars — each popped bar `h` is the limiting height of a rectangle whose right edge
is the current index and whose left edge is the new stack top. Append a sentinel
`0` so the stack fully drains at the end.

Width when popping index `j` with new top `stack[-1]`: `i - stack[-1] - 1`
(empty stack → width is `i`).

**Complexity:** Time O(n), Space O(n) — each bar pushed/popped once.

## Python
```python
def largestRectangleArea(heights: list[int]) -> int:
    stack = []           # indices, increasing heights
    best = 0
    for i, h in enumerate(heights + [0]):   # sentinel drains the stack
        while stack and heights[stack[-1]] > h:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            best = max(best, height * width)
        stack.append(i)
    return best
```

## TypeScript
```typescript
function largestRectangleArea(heights: number[]): number {
    const stack: number[] = []; // indices, increasing heights
    let best = 0;
    for (let i = 0; i <= heights.length; i++) {
        const h = i === heights.length ? 0 : heights[i]; // sentinel
        while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
            const height = heights[stack.pop()!];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            best = Math.max(best, height * width);
        }
        stack.push(i);
    }
    return best;
}
```

## Go
```go
func largestRectangleArea(heights []int) int {
    stack := []int{} // indices, increasing heights
    best := 0
    for i := 0; i <= len(heights); i++ {
        h := 0 // sentinel at i == len(heights)
        if i < len(heights) {
            h = heights[i]
        }
        for len(stack) > 0 && heights[stack[len(stack)-1]] > h {
            height := heights[stack[len(stack)-1]]
            stack = stack[:len(stack)-1]
            width := i
            if len(stack) > 0 {
                width = i - stack[len(stack)-1] - 1
            }
            if area := height * width; area > best {
                best = area
            }
        }
        stack = append(stack, i)
    }
    return best
}
```
