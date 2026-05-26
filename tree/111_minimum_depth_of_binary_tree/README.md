# 111. Minimum Depth of Binary Tree

BFS level order: return depth at the first leaf node encountered.

**Complexity:** Time O(n), Space O(n)

## Python
```python
from collections import deque

def minDepth(root):
    if not root: return 0
    queue = deque([(root, 1)])
    while queue:
        node, depth = queue.popleft()
        if not node.left and not node.right:
            return depth
        if node.left: queue.append((node.left, depth + 1))
        if node.right: queue.append((node.right, depth + 1))
```

## TypeScript
```typescript
function minDepth(root: TreeNode | null): number {
    if (!root) return 0;
    const queue: [TreeNode, number][] = [[root, 1]];
    for (const [node, depth] of queue) {
        if (!node.left && !node.right) return depth;
        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
    return 0;
}
```

## Go
```go
func minDepth(root *TreeNode) int {
    if root == nil { return 0 }
    type item struct { node *TreeNode; depth int }
    queue := []item{{root, 1}}
    for len(queue) > 0 {
        cur := queue[0]; queue = queue[1:]
        if cur.node.Left == nil && cur.node.Right == nil { return cur.depth }
        if cur.node.Left != nil { queue = append(queue, item{cur.node.Left, cur.depth + 1}) }
        if cur.node.Right != nil { queue = append(queue, item{cur.node.Right, cur.depth + 1}) }
    }
    return 0
}
```
