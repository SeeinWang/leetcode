# 232. Implement Queue using Stacks

Two stacks: in-stack for push, out-stack for pop/peek. Transfer lazily.

**Complexity:** Push O(1), Pop amortized O(1)

## Python
```python
class MyQueue:
    def __init__(self):
        self.in_stack, self.out_stack = [], []

    def push(self, x: int) -> None:
        self.in_stack.append(x)

    def _transfer(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())

    def pop(self) -> int:
        self._transfer()
        return self.out_stack.pop()

    def peek(self) -> int:
        self._transfer()
        return self.out_stack[-1]

    def empty(self) -> bool:
        return not self.in_stack and not self.out_stack
```

## TypeScript
```typescript
class MyQueue {
    private inStack: number[] = [];
    private outStack: number[] = [];
    push(x: number): void { this.inStack.push(x); }
    private transfer(): void {
        if (!this.outStack.length)
            while (this.inStack.length) this.outStack.push(this.inStack.pop()!);
    }
    pop(): number { this.transfer(); return this.outStack.pop()!; }
    peek(): number { this.transfer(); return this.outStack[this.outStack.length - 1]; }
    empty(): boolean { return !this.inStack.length && !this.outStack.length; }
}
```

## Go
```go
type MyQueue struct{ inStack, outStack []int }
func Constructor() MyQueue { return MyQueue{} }
func (q *MyQueue) Push(x int) { q.inStack = append(q.inStack, x) }
func (q *MyQueue) transfer() {
    if len(q.outStack) == 0 {
        for len(q.inStack) > 0 {
            n := len(q.inStack)
            q.outStack = append(q.outStack, q.inStack[n-1])
            q.inStack = q.inStack[:n-1]
        }
    }
}
func (q *MyQueue) Pop() int { q.transfer(); n := len(q.outStack); v := q.outStack[n-1]; q.outStack = q.outStack[:n-1]; return v }
func (q *MyQueue) Peek() int { q.transfer(); return q.outStack[len(q.outStack)-1] }
func (q *MyQueue) Empty() bool { return len(q.inStack) == 0 && len(q.outStack) == 0 }
```
