# 155. Min Stack

Two stacks: one for values, one tracking running minimum.

**Complexity:** All operations O(1), Space O(n)

## Python
```python
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        min_val = min(val, self.min_stack[-1] if self.min_stack else val)
        self.min_stack.append(min_val)

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]
```

## TypeScript
```typescript
class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    push(val: number): void {
        this.stack.push(val);
        const min = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);
        this.minStack.push(min);
    }
    pop(): void { this.stack.pop(); this.minStack.pop(); }
    top(): number { return this.stack[this.stack.length - 1]; }
    getMin(): number { return this.minStack[this.minStack.length - 1]; }
}
```

## Go
```go
type MinStack struct{ stack, minStack []int }
func Constructor() MinStack { return MinStack{} }
func (s *MinStack) Push(val int) {
    s.stack = append(s.stack, val)
    if len(s.minStack) == 0 || val < s.minStack[len(s.minStack)-1] {
        s.minStack = append(s.minStack, val)
    } else {
        s.minStack = append(s.minStack, s.minStack[len(s.minStack)-1])
    }
}
func (s *MinStack) Pop()      { s.stack = s.stack[:len(s.stack)-1]; s.minStack = s.minStack[:len(s.minStack)-1] }
func (s *MinStack) Top() int  { return s.stack[len(s.stack)-1] }
func (s *MinStack) GetMin() int { return s.minStack[len(s.minStack)-1] }
```
