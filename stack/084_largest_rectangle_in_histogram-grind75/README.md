# 84. Largest Rectangle in Histogram

Monotonic increasing stack: track (start_index, height) pairs.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def largestRectangleArea(heights: list[int]) -> int:
    max_area = 0
    stack = []  # (index, height)
    for i, h in enumerate(heights):
        start = i
        while stack and stack[-1][1] > h:
            idx, height = stack.pop()
            max_area = max(max_area, height * (i - idx))
            start = idx
        stack.append((start, h))
    for idx, height in stack:
        max_area = max(max_area, height * (len(heights) - idx))
    return max_area
```

## TypeScript
```typescript
function largestRectangleArea(heights: number[]): number {
    let maxArea = 0;
    const stack: [number, number][] = [];
    for (let i = 0; i < heights.length; i++) {
        let start = i;
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            const [idx, height] = stack.pop()!;
            maxArea = Math.max(maxArea, height * (i - idx));
            start = idx;
        }
        stack.push([start, heights[i]]);
    }
    for (const [idx, height] of stack)
        maxArea = Math.max(maxArea, height * (heights.length - idx));
    return maxArea;
}
```

## Go
```go
func largestRectangleArea(heights []int) int {
    maxArea := 0
    type pair struct{ idx, h int }
    stack := []pair{}
    for i, h := range heights {
        start := i
        for len(stack) > 0 && stack[len(stack)-1].h > h {
            p := stack[len(stack)-1]; stack = stack[:len(stack)-1]
            if p.h*(i-p.idx) > maxArea { maxArea = p.h * (i - p.idx) }
            start = p.idx
        }
        stack = append(stack, pair{start, h})
    }
    for _, p := range stack {
        if p.h*(len(heights)-p.idx) > maxArea { maxArea = p.h * (len(heights) - p.idx) }
    }
    return maxArea
}
```
