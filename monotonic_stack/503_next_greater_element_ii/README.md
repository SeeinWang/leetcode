# 503. Next Greater Element II

Same decreasing stack as [496](../496_next_greater_element_i), but the array is
**circular**. The trick: iterate `2n` times using `i % n`, so every element gets
a second pass to find a greater element that wraps around. The stack holds
**indices** so we can write answers in place; only push during the first pass
(or guard with `i < n`) — the second pass only resolves leftovers.

**Complexity:** Time O(n), Space O(n).

## Python
```python
def nextGreaterElements(nums: list[int]) -> list[int]:
    n = len(nums)
    res = [-1] * n
    stack = []  # indices, values decreasing
    for i in range(2 * n):
        cur = nums[i % n]
        while stack and nums[stack[-1]] < cur:
            res[stack.pop()] = cur
        if i < n:
            stack.append(i)
    return res
```

## TypeScript
```typescript
function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length;
    const res: number[] = new Array(n).fill(-1);
    const stack: number[] = []; // indices, values decreasing
    for (let i = 0; i < 2 * n; i++) {
        const cur = nums[i % n];
        while (stack.length > 0 && nums[stack[stack.length - 1]] < cur) {
            res[stack.pop()!] = cur;
        }
        if (i < n) stack.push(i);
    }
    return res;
}
```

## Go
```go
func nextGreaterElements(nums []int) []int {
    n := len(nums)
    res := make([]int, n)
    for i := range res {
        res[i] = -1
    }
    stack := []int{} // indices, values decreasing
    for i := 0; i < 2*n; i++ {
        cur := nums[i%n]
        for len(stack) > 0 && nums[stack[len(stack)-1]] < cur {
            res[stack[len(stack)-1]] = cur
            stack = stack[:len(stack)-1]
        }
        if i < n {
            stack = append(stack, i)
        }
    }
    return res
}
```
