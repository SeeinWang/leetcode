# 513. Find Bottom Left Tree Value

BFS level order traversal; track the first node of each level, return last level's first value.

**Complexity:** Time O(n), Space O(n)

## Python
```python
from collections import deque

def findBottomLeftValue(root):
    queue = deque([root])
    result = root.val
    while queue:
        result = queue[0].val
        for _ in range(len(queue)):
            node = queue.popleft()
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
    return result
```

## TypeScript
```typescript
function findBottomLeftValue(root: TreeNode | null): number {
    const queue: TreeNode[] = [root!];
    let result = root!.val;
    while (queue.length > 0) {
        result = queue[0].val;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return result;
}
```

## Go
```go
func findBottomLeftValue(root *TreeNode) int {
    queue := []*TreeNode{root}
    result := root.Val
    for len(queue) > 0 {
        result = queue[0].Val
        size := len(queue)
        for i := 0; i < size; i++ {
            node := queue[0]; queue = queue[1:]
            if node.Left != nil { queue = append(queue, node.Left) }
            if node.Right != nil { queue = append(queue, node.Right) }
        }
    }
    return result
}
```
