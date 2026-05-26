# 933. Number of Recent Calls

Queue: append t, remove front while front < t-3000.

**Complexity:** Amortized O(1) per ping

## Python
```python
from collections import deque

class RecentCounter:
    def __init__(self):
        self.queue = deque()

    def ping(self, t: int) -> int:
        self.queue.append(t)
        while self.queue[0] < t - 3000:
            self.queue.popleft()
        return len(self.queue)
```

## TypeScript
```typescript
class RecentCounter {
    private queue: number[] = [];
    ping(t: number): number {
        this.queue.push(t);
        while (this.queue[0] < t - 3000) this.queue.shift();
        return this.queue.length;
    }
}
```

## Go
```go
type RecentCounter struct{ queue []int }
func Constructor() RecentCounter { return RecentCounter{} }
func (r *RecentCounter) Ping(t int) int {
    r.queue = append(r.queue, t)
    for r.queue[0] < t-3000 { r.queue = r.queue[1:] }
    return len(r.queue)
}
```
