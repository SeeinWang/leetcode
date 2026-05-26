# 173. Binary Search Tree Iterator

Use a stack to simulate in-order traversal lazily: push the left spine on init, and on each `next()` pop the top, then push the left spine of its right child. Amortized O(1) per `next()`, O(h) space.

**Complexity:** `next()` amortized O(1), `hasNext()` O(1), Space O(h)

## TypeScript
```typescript
class BSTIterator {
    private stack: TreeNode[] = [];
    constructor(root: TreeNode | null) {
        this.pushLeft(root);
    }
    next(): number {
        const node = this.stack.pop()!;
        this.pushLeft(node.right);
        return node.val;
    }
    hasNext(): boolean {
        return this.stack.length > 0;
    }
    private pushLeft(node: TreeNode | null) {
        while (node) { this.stack.push(node); node = node.left; }
    }
}
```

## Python
```python
class BSTIterator:
    def __init__(self, root):
        self.stack = []
        self._push_left(root)

    def next(self) -> int:
        node = self.stack.pop()
        self._push_left(node.right)
        return node.val

    def hasNext(self) -> bool:
        return len(self.stack) > 0

    def _push_left(self, node):
        while node:
            self.stack.append(node)
            node = node.left
```

## Go
```go
type BSTIterator struct {
    stack []*TreeNode
}

func Constructor(root *TreeNode) BSTIterator {
    it := BSTIterator{}
    it.pushLeft(root)
    return it
}

func (it *BSTIterator) Next() int {
    n := len(it.stack) - 1
    node := it.stack[n]
    it.stack = it.stack[:n]
    it.pushLeft(node.Right)
    return node.Val
}

func (it *BSTIterator) HasNext() bool {
    return len(it.stack) > 0
}

func (it *BSTIterator) pushLeft(node *TreeNode) {
    for node != nil {
        it.stack = append(it.stack, node)
        node = node.Left
    }
}
```

## Why amortized O(1)
Each node is pushed and popped exactly once over the lifetime of the iterator. Across N calls to `next()`, total work is O(N + h), so each call averages O(1) even though a single call can do O(h) work when descending a long left spine.
