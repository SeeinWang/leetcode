# 239. Sliding Window Maximum

Monotonic deque: maintain indices in decreasing order of values; front is always current max.

**Complexity:** Time O(n), Space O(k)

## Python
```python
from collections import deque

def maxSlidingWindow(nums: list[int], k: int) -> list[int]:
    dq = deque()  # stores indices
    result = []
    for i, num in enumerate(nums):
        # Remove elements outside window
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        # Remove smaller elements from back
        while dq and nums[dq[-1]] < num:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result
```

## TypeScript
```typescript
function maxSlidingWindow(nums: number[], k: number): number[] {
    const dq: number[] = []; // stores indices
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        while (dq.length > 0 && dq[0] < i - k + 1) dq.shift();
        while (dq.length > 0 && nums[dq[dq.length - 1]] < nums[i]) dq.pop();
        dq.push(i);
        if (i >= k - 1) result.push(nums[dq[0]]);
    }
    return result;
}
```

## Go
```go
func maxSlidingWindow(nums []int, k int) []int {
    dq := []int{} // stores indices
    result := []int{}
    for i, num := range nums {
        for len(dq) > 0 && dq[0] < i-k+1 {
            dq = dq[1:]
        }
        for len(dq) > 0 && nums[dq[len(dq)-1]] < num {
            dq = dq[:len(dq)-1]
        }
        dq = append(dq, i)
        if i >= k-1 {
            result = append(result, nums[dq[0]])
        }
    }
    return result
}
```
