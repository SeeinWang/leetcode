# 622. Design Circular Queue

Fixed-size array with head pointer and count. Tail = (head + count) % size.

**Complexity:** All operations O(1), Space O(k)

## Python
```python
class MyCircularQueue:
    def __init__(self, k: int):
        self.size, self.queue, self.head, self.count = k, [0]*k, 0, 0

    def enQueue(self, value: int) -> bool:
        if self.isFull(): return False
        self.queue[(self.head + self.count) % self.size] = value
        self.count += 1; return True

    def deQueue(self) -> bool:
        if self.isEmpty(): return False
        self.head = (self.head + 1) % self.size; self.count -= 1; return True

    def Front(self) -> int:
        return -1 if self.isEmpty() else self.queue[self.head]

    def Rear(self) -> int:
        return -1 if self.isEmpty() else self.queue[(self.head + self.count - 1) % self.size]

    def isEmpty(self) -> bool: return self.count == 0
    def isFull(self) -> bool: return self.count == self.size
```

## TypeScript
```typescript
class MyCircularQueue {
    private queue: number[]; private head = 0; private count = 0; private size: number;
    constructor(k: number) { this.size = k; this.queue = new Array(k).fill(0); }
    enQueue(v: number): boolean { if (this.isFull()) return false; this.queue[(this.head+this.count)%this.size]=v; this.count++; return true; }
    deQueue(): boolean { if (this.isEmpty()) return false; this.head=(this.head+1)%this.size; this.count--; return true; }
    Front(): number { return this.isEmpty() ? -1 : this.queue[this.head]; }
    Rear(): number { return this.isEmpty() ? -1 : this.queue[(this.head+this.count-1)%this.size]; }
    isEmpty(): boolean { return this.count === 0; }
    isFull(): boolean { return this.count === this.size; }
}
```

## Go
```go
type MyCircularQueue struct{ queue []int; head, count, size int }
func Constructor(k int) MyCircularQueue { return MyCircularQueue{queue: make([]int, k), size: k} }
func (q *MyCircularQueue) EnQueue(v int) bool { if q.IsFull() { return false }; q.queue[(q.head+q.count)%q.size]=v; q.count++; return true }
func (q *MyCircularQueue) DeQueue() bool { if q.IsEmpty() { return false }; q.head=(q.head+1)%q.size; q.count--; return true }
func (q *MyCircularQueue) Front() int { if q.IsEmpty() { return -1 }; return q.queue[q.head] }
func (q *MyCircularQueue) Rear() int { if q.IsEmpty() { return -1 }; return q.queue[(q.head+q.count-1)%q.size] }
func (q *MyCircularQueue) IsEmpty() bool { return q.count == 0 }
func (q *MyCircularQueue) IsFull() bool  { return q.count == q.size }
```
