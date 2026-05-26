# 124. Binary Tree Maximum Path Sum

Find the maximum path sum of **any** path in the tree.
A path is a sequence of connected nodes (each used at most once); it does not
have to pass through the root or reach a leaf.

## Approach: DFS returning "single-branch gain", global max for the "bend"

For each node, recursively compute the best sum of a path that **starts at this
node and goes down one side only** (single branch). Call this its `gain`.

At every node we also consider the "bent" path that uses both children:
`node.val + leftGain + rightGain`. Update the global answer with this — but
**do not return it**, because a bent path can't be extended upward without
revisiting `node`.

Negative gains are clamped to 0: if a subtree would hurt the sum, skip it.

**Complexity:** Time O(n), Space O(h).

## Python
```python
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.ans = float('-inf')

        def gain(node):
            if not node:
                return 0
            left = max(gain(node.left), 0)
            right = max(gain(node.right), 0)
            self.ans = max(self.ans, node.val + left + right)
            return node.val + max(left, right)

        gain(root)
        return self.ans
```

## TypeScript
```typescript
function maxPathSum(root: TreeNode | null): number {
    let ans = -Infinity;
    function gain(node: TreeNode | null): number {
        if (!node) return 0;
        const left = Math.max(gain(node.left), 0);
        const right = Math.max(gain(node.right), 0);
        ans = Math.max(ans, node.val + left + right);
        return node.val + Math.max(left, right);
    }
    gain(root);
    return ans;
}
```

## Go
```go
func maxPathSum(root *TreeNode) int {
    ans := math.MinInt32
    var gain func(node *TreeNode) int
    gain = func(node *TreeNode) int {
        if node == nil { return 0 }
        left := max(gain(node.Left), 0)
        right := max(gain(node.Right), 0)
        if node.Val + left + right > ans {
            ans = node.Val + left + right
        }
        return node.Val + max(left, right)
    }
    gain(root)
    return ans
}
```

## Key insights
- **Clamp negatives to 0**: `max(gain(child), 0)` — drop a subtree if it hurts.
- **Bend vs. return value**:
  - When updating the global answer at `node`, you may use **both** children (the path bends through `node`).
  - When returning to the parent, only one side may be chosen — a path can't fork twice through the same parent.
- Initialize answer to `-Infinity` (node values can be negative; a single negative node may be the answer).
