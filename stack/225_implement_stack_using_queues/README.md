# 225. Implement Stack using Queues

Use one queue; after each push, rotate all previous elements to the back so new element is at front.

**Complexity:** Time O(n) push, O(1) others, Space O(n)

## Python
```python
from collections import deque

class MyStack:
    def __init__(self):
        self.queue = deque()

    def push(self, x: int) -> None:
        self.queue.append(x)
        for _ in range(len(self.queue) - 1):
            self.queue.append(self.queue.popleft())

    def pop(self) -> int:
        return self.queue.popleft()

    def top(self) -> int:
        return self.queue[0]

    def empty(self) -> bool:
        return len(self.queue) == 0
```

## TypeScript
```typescript
class MyStack {
    private queue: number[] = [];

    push(x: number): void {
        this.queue.push(x);
        for (let i = 0; i < this.queue.length - 1; i++)
            this.queue.push(this.queue.shift()!);
    }

    pop(): number { return this.queue.shift()!; }
    top(): number { return this.queue[0]; }
    empty(): boolean { return this.queue.length === 0; }
}
```

## Go
```go
type MyStack struct {
    queue []int
}

func Constructor() MyStack { return MyStack{} }

func (this *MyStack) Push(x int) {
    this.queue = append(this.queue, x)
    for i := 0; i < len(this.queue)-1; i++ {
        this.queue = append(this.queue, this.queue[0])
        this.queue = this.queue[1:]
    }
}

func (this *MyStack) Pop() int {
    val := this.queue[0]
    this.queue = this.queue[1:]
    return val
}

func (this *MyStack) Top() int { return this.queue[0] }
func (this *MyStack) Empty() bool { return len(this.queue) == 0 }
```
