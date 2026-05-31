# 496. Next Greater Element I

The template problem for the monotonic stack. Sweep `nums2` with a **decreasing
stack of values**: when the current value is bigger than the stack top, that
current value is the "next greater" for everything we pop. Record each answer in
a hashmap, then map `nums1` through it.

**Complexity:** Time O(n + m), Space O(n) — each element pushed/popped once.

## Python
```python
def nextGreaterElement(nums1: list[int], nums2: list[int]) -> list[int]:
    next_greater = {}          # value -> its next greater element
    stack = []                 # decreasing values, waiting for a bigger one
    for num in nums2:
        while stack and stack[-1] < num:
            next_greater[stack.pop()] = num
        stack.append(num)
    return [next_greater.get(num, -1) for num in nums1]
```

## TypeScript
```typescript
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreater = new Map<number, number>();
    const stack: number[] = []; // decreasing values
    for (const num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            nextGreater.set(stack.pop()!, num);
        }
        stack.push(num);
    }
    return nums1.map((num) => nextGreater.get(num) ?? -1);
}
```

## Go
```go
func nextGreaterElement(nums1 []int, nums2 []int) []int {
    nextGreater := make(map[int]int) // value -> next greater
    stack := []int{}                 // decreasing values
    for _, num := range nums2 {
        for len(stack) > 0 && stack[len(stack)-1] < num {
            nextGreater[stack[len(stack)-1]] = num
            stack = stack[:len(stack)-1]
        }
        stack = append(stack, num)
    }
    res := make([]int, len(nums1))
    for i, num := range nums1 {
        if v, ok := nextGreater[num]; ok {
            res[i] = v
        } else {
            res[i] = -1
        }
    }
    return res
}
```
