# 215. Kth Largest Element in an Array

Min-heap of size k. The top is the kth largest.

**Complexity:** Time O(n log k), Space O(k)

## Python
```python
import heapq

def findKthLargest(nums: list[int], k: int) -> int:
    heap = nums[:k]
    heapq.heapify(heap)
    for num in nums[k:]:
        if num > heap[0]:
            heapq.heapreplace(heap, num)
    return heap[0]
```

## TypeScript
```typescript
function findKthLargest(nums: number[], k: number): number {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}
```

## Go
```go
import "container/heap"

type IntHeap []int
func (h IntHeap) Len() int { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *IntHeap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *IntHeap) Pop() interface{} { old:=*h; n:=len(old); x:=old[n-1]; *h=old[:n-1]; return x }

func findKthLargest(nums []int, k int) int {
    h := &IntHeap{}
    heap.Init(h)
    for _, num := range nums {
        heap.Push(h, num)
        if h.Len() > k { heap.Pop(h) }
    }
    return (*h)[0]
}
```
