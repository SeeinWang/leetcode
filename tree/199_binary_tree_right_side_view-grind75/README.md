# 199. Binary Tree Right Side View

BFS level order traversal; append the last node's value at each level.

**Complexity:** Time O(n), Space O(n)

## Python
```python
from collections import deque

def rightSideView(root) -> list[int]:
    if not root: return []
    result, queue = [], deque([root])
    while queue:
        for i in range(len(queue)):
            node = queue.popleft()
            if i == 0: result.append(node.val)  # last element (process right first)
            if node.right: queue.append(node.right)
            if node.left: queue.append(node.left)
    return result
```

## TypeScript
```typescript
function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];
    const result: number[] = [];
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            if (i === size - 1) result.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return result;
}
```

## Go
```go
func rightSideView(root *TreeNode) []int {
    if root == nil { return nil }
    result := []int{}
    queue := []*TreeNode{root}
    for len(queue) > 0 {
        size := len(queue)
        for i := 0; i < size; i++ {
            node := queue[0]; queue = queue[1:]
            if i == size-1 { result = append(result, node.Val) }
            if node.Left != nil { queue = append(queue, node.Left) }
            if node.Right != nil { queue = append(queue, node.Right) }
        }
    }
    return result
}
```
