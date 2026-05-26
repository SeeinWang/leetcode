# 100. Same Tree

Recursively compare values and structure at every node.

**Complexity:** Time O(n), Space O(h)

## Python
```python
def isSameTree(p: TreeNode, q: TreeNode) -> bool:
    if not p and not q: return True
    if not p or not q: return False
    return p.val == q.val and isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
```

## TypeScript
```typescript
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

## Go
```go
func isSameTree(p *TreeNode, q *TreeNode) bool {
    if p == nil && q == nil { return true }
    if p == nil || q == nil { return false }
    return p.Val == q.Val && isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
}
```
