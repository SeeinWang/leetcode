# 1650. Lowest Common Ancestor of a Binary Tree III

Each node has a `parent` pointer. No root given — just the two target nodes.

## Approach: two-pointer (same as LC 160)

Walk up from p and q simultaneously. Whenever a pointer hits `null` (past the root),
redirect it to the **other** node's starting point. After at most `depth(p) + depth(q)`
steps, they meet at the LCA.

**Why it works:** both pointers traverse exactly the same total path length
(`up_from_p + up_from_q`), so they align at the first common ancestor.

**Complexity:** Time O(h), Space O(1)

## Python
```python
def lowestCommonAncestor(p, q):
    a, b = p, q
    while a != b:
        a = a.parent if a.parent else q
        b = b.parent if b.parent else p
    return a
```

## TypeScript
```typescript
function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
    let a = p, b = q;
    while (a !== b) {
        a = a!.parent ?? q;
        b = b!.parent ?? p;
    }
    return a;
}
```

## Go
```go
func lowestCommonAncestor(p, q *Node) *Node {
    a, b := p, q
    for a != b {
        if a.Parent != nil { a = a.Parent } else { a = q }
        if b.Parent != nil { b = b.Parent } else { b = p }
    }
    return a
}
```

## Alternative: hash set (O(h) space)

Walk p up, store all ancestors in a set. Walk q up, first hit is LCA.
Simpler but uses extra space — interviewers will likely ask for the two-pointer version.
