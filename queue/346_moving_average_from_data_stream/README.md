# 346. Moving Average from Data Stream

Fixed-size queue with running sum for O(1) updates.

**Complexity:** O(1) per next, Space O(size)

## Python
```python
from collections import deque

class MovingAverage:
    def __init__(self, size: int):
        self.size, self.queue, self.window_sum = size, deque(), 0

    def next(self, val: int) -> float:
        if len(self.queue) == self.size:
            self.window_sum -= self.queue.popleft()
        self.queue.append(val)
        self.window_sum += val
        return self.window_sum / len(self.queue)
```

## TypeScript
```typescript
class MovingAverage {
    private queue: number[] = []; private windowSum = 0; private size: number;
    constructor(size: number) { this.size = size; }
    next(val: number): number {
        if (this.queue.length === this.size) this.windowSum -= this.queue.shift()!;
        this.queue.push(val); this.windowSum += val;
        return this.windowSum / this.queue.length;
    }
}
```

## Go
```go
type MovingAverage struct{ size, windowSum int; queue []int }
func Constructor(size int) MovingAverage { return MovingAverage{size: size} }
func (m *MovingAverage) Next(val int) float64 {
    if len(m.queue) == m.size { m.windowSum -= m.queue[0]; m.queue = m.queue[1:] }
    m.queue = append(m.queue, val); m.windowSum += val
    return float64(m.windowSum) / float64(len(m.queue))
}
```
