# 310. Minimum Height Trees

## 题目
有 `n` 个节点的无向树，标号 `0` 到 `n-1`，给定 `edges`（`edges[i] = [a, b]` 表示一条边）。选任一节点 `x` 作为根都能形成一棵有根树，记该树高度为 `h(x)`。返回所有使 `h(x)` 最小的节点（即最小高度树的根集合）。结果集合最多包含 2 个节点。

### Example
- Input: `n = 4, edges = [[1,0],[1,2],[1,3]]` → `[1]`
- Input: `n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]` → `[3,4]`

### Constraints
- `1 <= n <= 2 * 10^4`
- `edges.length == n - 1`
- 输入保证是合法的树

## 思路
Iteratively remove leaf nodes (BFS from leaves inward), last 1-2 nodes are roots of MHTs.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
    if n == 1:
        return [0]
    adj = [set() for _ in range(n)]
    for u, v in edges:
        adj[u].add(v)
        adj[v].add(u)
    leaves = [i for i in range(n) if len(adj[i]) == 1]
    remaining = n
    while remaining > 2:
        remaining -= len(leaves)
        new_leaves = []
        for leaf in leaves:
            neighbor = next(iter(adj[leaf]))
            adj[neighbor].remove(leaf)
            if len(adj[neighbor]) == 1:
                new_leaves.append(neighbor)
        leaves = new_leaves
    return leaves
```

## TypeScript
```typescript
function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];
    const adj: Set<number>[] = Array.from({length: n}, () => new Set());
    for (const [u, v] of edges) { adj[u].add(v); adj[v].add(u); }
    let leaves = [];
    for (let i = 0; i < n; i++) if (adj[i].size === 1) leaves.push(i);
    let remaining = n;
    while (remaining > 2) {
        remaining -= leaves.length;
        const newLeaves: number[] = [];
        for (const leaf of leaves) {
            const neighbor = adj[leaf].values().next().value;
            adj[neighbor].delete(leaf);
            if (adj[neighbor].size === 1) newLeaves.push(neighbor);
        }
        leaves = newLeaves;
    }
    return leaves;
}
```

## Go
```go
func findMinHeightTrees(n int, edges [][]int) []int {
    if n == 1 { return []int{0} }
    adj := make([]map[int]bool, n)
    for i := range adj { adj[i] = make(map[int]bool) }
    for _, e := range edges { adj[e[0]][e[1]] = true; adj[e[1]][e[0]] = true }
    leaves := []int{}
    for i := 0; i < n; i++ { if len(adj[i]) == 1 { leaves = append(leaves, i) } }
    remaining := n
    for remaining > 2 {
        remaining -= len(leaves)
        newLeaves := []int{}
        for _, leaf := range leaves {
            for neighbor := range adj[leaf] {
                delete(adj[neighbor], leaf)
                if len(adj[neighbor]) == 1 { newLeaves = append(newLeaves, neighbor) }
            }
        }
        leaves = newLeaves
    }
    return leaves
}
```
