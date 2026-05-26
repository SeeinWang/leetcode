# 1644. Lowest Common Ancestor of a Binary Tree II

Variant of 236 where p or q may **not** exist in the tree — return null if either is missing.

## Key difference from 236

236 can early-return when `root == p` because both nodes are guaranteed to exist.
1644 must traverse the **entire** subtree to confirm both p and q were found.

## Approach

Post-order DFS that counts how many targets were found in each subtree.

- If current node is p or q, count it (but **don't** early-return — keep recursing to find the other).
- LCA candidate = first node where left-found + right-found + self-found covers both p and q.
- Only return the candidate if total count == 2.

**Complexity:** Time O(n), Space O(h)

## Python
```python
def lowestCommonAncestor(root, p, q):
    ans = None
    def dfs(node):
        nonlocal ans
        if not node: return 0
        left = dfs(node.left)
        right = dfs(node.right)
        mid = 1 if node == p or node == q else 0
        if left + right + mid == 2 and ans is None:
            ans = node
        return 1 if left + right + mid > 0 else 0
    dfs(root)
    return ans
```

## TypeScript
```typescript
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    let ans: TreeNode | null = null;
    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        const mid = (node === p || node === q) ? 1 : 0;
        if (left + right + mid === 2 && ans === null) ans = node;
        return left + right + mid > 0 ? 1 : 0;
    };
    dfs(root);
    return ans;
}
```

## Go
```go
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    var ans *TreeNode
    var dfs func(*TreeNode) int
    dfs = func(node *TreeNode) int {
        if node == nil { return 0 }
        left := dfs(node.Left)
        right := dfs(node.Right)
        mid := 0
        if node == p || node == q { mid = 1 }
        if left+right+mid == 2 && ans == nil { ans = node }
        if left+right+mid > 0 { return 1 }
        return 0
    }
    dfs(root)
    return ans
}
```
