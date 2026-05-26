# 295. Find Median from Data Stream

Two heaps: max-heap for lower half, min-heap for upper half. Keep sizes balanced.

**Complexity:** addNum O(log n), findMedian O(1)

## Python
```python
import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # max-heap (negated)
        self.large = []  # min-heap

    def addNum(self, num: int) -> None:
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2.0
```

## TypeScript
```typescript
// Using sorted array for simplicity (heap not built-in)
class MedianFinder {
    private data: number[] = [];
    addNum(num: number): void {
        let lo=0, hi=this.data.length;
        while(lo<hi){ const mid=(lo+hi)>>1; if(this.data[mid]<num) lo=mid+1; else hi=mid; }
        this.data.splice(lo, 0, num);
    }
    findMedian(): number {
        const n=this.data.length;
        return n%2===1 ? this.data[Math.floor(n/2)] : (this.data[n/2-1]+this.data[n/2])/2;
    }
}
```

## Go
```go
import "container/heap"

type MaxHeap []int
func (h MaxHeap) Len() int { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h MaxHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *MaxHeap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *MaxHeap) Pop() interface{} { old:=*h; n:=len(old); x:=old[n-1]; *h=old[:n-1]; return x }

type MinHeap []int
func (h MinHeap) Len() int { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *MinHeap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *MinHeap) Pop() interface{} { old:=*h; n:=len(old); x:=old[n-1]; *h=old[:n-1]; return x }

type MedianFinder struct{ small *MaxHeap; large *MinHeap }
func Constructor() MedianFinder {
    s, l := &MaxHeap{}, &MinHeap{}
    heap.Init(s); heap.Init(l)
    return MedianFinder{s, l}
}
func (mf *MedianFinder) AddNum(num int) {
    heap.Push(mf.small, num)
    heap.Push(mf.large, heap.Pop(mf.small))
    if mf.large.Len() > mf.small.Len() { heap.Push(mf.small, heap.Pop(mf.large)) }
}
func (mf *MedianFinder) FindMedian() float64 {
    if mf.small.Len() > mf.large.Len() { return float64((*mf.small)[0]) }
    return float64((*mf.small)[0]+(*mf.large)[0]) / 2.0
}
```
