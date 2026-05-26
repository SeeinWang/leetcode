# 1448. Count Good Nodes in Binary Tree

A node X is **good** if no node on the path from root to X has a value strictly
greater than X.val. Count all good nodes.

## Approach: DFS carrying path max

Walk down the tree, passing the maximum value seen on the path so far.
At each node: if `node.val >= max_so_far`, it's good — increment.
Recurse into children with `max(max_so_far, node.val)`.

**Why it works:** "good" only depends on the path from root, so a single top-down
DFS that threads the running max captures it in one pass.

**Complexity:** Time O(n), Space O(h) recursion stack.

## Python
```python
def goodNodes(root):
    def dfs(node, max_so_far):
        if not node:
            return 0
        good = 1 if node.val >= max_so_far else 0
        new_max = max(max_so_far, node.val)
        return good + dfs(node.left, new_max) + dfs(node.right, new_max)
    return dfs(root, float('-inf'))
```

## TypeScript
```typescript
function goodNodes(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, maxSoFar: number): number {
        if (!node) return 0;
        const good = node.val >= maxSoFar ? 1 : 0;
        const newMax = Math.max(maxSoFar, node.val);
        return good + dfs(node.left, newMax) + dfs(node.right, newMax);
    }
    return dfs(root, -Infinity);
}
```

## Go
```go
func goodNodes(root *TreeNode) int {
    var dfs func(node *TreeNode, maxSoFar int) int
    dfs = func(node *TreeNode, maxSoFar int) int {
        if node == nil { return 0 }
        good := 0
        if node.Val >= maxSoFar { good = 1 }
        newMax := maxSoFar
        if node.Val > newMax { newMax = node.Val }
        return good + dfs(node.Left, newMax) + dfs(node.Right, newMax)
    }
    return dfs(root, math.MinInt32)
}
```

## Notes
- Root is always good (nothing above it).
- Use `>=` not `>` — equal-to-max still counts as good.
- Constraint says `-10^4 <= Node.val <= 10^4`, so initial `-Infinity` / `math.MinInt32` is safe.
