# 42. Trapping Rain Water

Two classic approaches. The **monotonic stack** fits this folder; the
**two-pointer** version is the O(1)-space favorite worth knowing for interviews.

**Complexity:** Both O(n) time. Stack O(n) space, two-pointer O(1) space.

## Monotonic Stack

Decreasing stack of indices. When a taller bar arrives, it forms a "container"
with the bar below the popped one; trapped water is bounded by the shorter of the
two walls, over the width between them.

### Python
```python
def trap(height: list[int]) -> int:
    stack = []   # indices, decreasing heights
    water = 0
    for i, h in enumerate(height):
        while stack and height[stack[-1]] < h:
            bottom = stack.pop()
            if not stack:
                break
            left = stack[-1]
            width = i - left - 1
            bounded = min(height[left], h) - height[bottom]
            water += width * bounded
        stack.append(i)
    return water
```

### TypeScript
```typescript
function trap(height: number[]): number {
    const stack: number[] = []; // indices, decreasing heights
    let water = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
            const bottom = stack.pop()!;
            if (stack.length === 0) break;
            const left = stack[stack.length - 1];
            const width = i - left - 1;
            const bounded = Math.min(height[left], height[i]) - height[bottom];
            water += width * bounded;
        }
        stack.push(i);
    }
    return water;
}
```

### Go
```go
func trap(height []int) int {
    stack := []int{} // indices, decreasing heights
    water := 0
    for i, h := range height {
        for len(stack) > 0 && height[stack[len(stack)-1]] < h {
            bottom := stack[len(stack)-1]
            stack = stack[:len(stack)-1]
            if len(stack) == 0 {
                break
            }
            left := stack[len(stack)-1]
            width := i - left - 1
            bounded := min(height[left], h) - height[bottom]
            water += width * bounded
        }
        stack = append(stack, i)
    }
    return water
}
```

## Two Pointers (O(1) space)

Move the pointer on the shorter side inward, tracking running max walls.

```python
def trap(height: list[int]) -> int:
    l, r = 0, len(height) - 1
    left_max = right_max = water = 0
    while l < r:
        if height[l] < height[r]:
            left_max = max(left_max, height[l])
            water += left_max - height[l]
            l += 1
        else:
            right_max = max(right_max, height[r])
            water += right_max - height[r]
            r -= 1
    return water
```
