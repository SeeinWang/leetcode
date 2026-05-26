# 107. Binary Tree Level Order Traversal II

Same as 102 BFS, but reverse the result at the end (or insert at the front).

**Complexity:** Time O(n), Space O(n)

## Python
```python
from collections import deque

def levelOrderBottom(root):
    if not root: return []
    res, queue = [], deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        res.append(level)
    return res[::-1]
```

## TypeScript
```typescript
function levelOrderBottom(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;
    const queue: TreeNode[] = [root];
    let head = 0;
    while (head < queue.length) {
        const size = queue.length - head;
        const level: number[] = [];
        for (let i = 0; i < size; i++) {
            const cur = queue[head++];
            level.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        res.push(level);
    }
    return res.reverse();
}
```

## Go
```go
func levelOrderBottom(root *TreeNode) [][]int {
    if root == nil { return nil }
    result := [][]int{}
    queue := []*TreeNode{root}
    for len(queue) > 0 {
        size := len(queue)
        level := make([]int, 0, size)
        for i := 0; i < size; i++ {
            node := queue[0]; queue = queue[1:]
            level = append(level, node.Val)
            if node.Left != nil { queue = append(queue, node.Left) }
            if node.Right != nil { queue = append(queue, node.Right) }
        }
        result = append(result, level)
    }
    for i, j := 0, len(result)-1; i < j; i, j = i+1, j-1 {
        result[i], result[j] = result[j], result[i]
    }
    return result
}
```
