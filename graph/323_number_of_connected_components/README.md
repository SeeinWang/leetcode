# 323. Number of Connected Components in an Undirected Graph

## 题目
给定 `n` 个节点（标号 `0` 到 `n-1`）和 `edges` 边列表，返回**连通分量的数量**。

### Example
- Input: `n = 5, edges = [[0,1],[1,2],[3,4]]` → `2`（`{0,1,2}` 和 `{3,4}`）
- Input: `n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]` → `1`

### Constraints
- `1 <= n <= 2000`
- `1 <= edges.length <= 5000`
- 无重复边，`ai != bi`

## 思路

### 方法 1：Union-Find（最经典）
1. 初始化 `parent[i] = i`，共 `n` 个独立集合。
2. 对每条边 `[a, b]`，若 `find(a) != find(b)` 则 `union` 并把 `count -= 1`。
3. 返回 `count`。

带路径压缩 + 按秩合并，单次操作近 O(1)，总复杂度 **O((n+E)·α(n))**。

### 方法 2：DFS / BFS
建邻接表，遍历每个未访问节点，每次启动 DFS/BFS 就算一个连通分量。

**Complexity:** Time O(V+E), Space O(V+E)

## Python (Union-Find)
```python
class Solution:
    def countComponents(self, n: int, edges: list[list[int]]) -> int:
        parent = list(range(n))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        count = n
        for a, b in edges:
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb
                count -= 1
        return count
```

## TypeScript (Union-Find)
```typescript
function countComponents(n: number, edges: number[][]): number {
    const parent = Array.from({length: n}, (_, i) => i)
    function find(x: number): number {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]]
            x = parent[x]
        }
        return x
    }
    let count = n
    for (const [a, b] of edges) {
        const ra = find(a), rb = find(b)
        if (ra !== rb) {
            parent[ra] = rb
            count--
        }
    }
    return count
}
```

## Go (Union-Find)
```go
func countComponents(n int, edges [][]int) int {
    parent := make([]int, n)
    for i := range parent { parent[i] = i }
    var find func(x int) int
    find = func(x int) int {
        for parent[x] != x {
            parent[x] = parent[parent[x]]
            x = parent[x]
        }
        return x
    }
    count := n
    for _, e := range edges {
        ra, rb := find(e[0]), find(e[1])
        if ra != rb {
            parent[ra] = rb
            count--
        }
    }
    return count
}
```

## 关联题
- **200. Number of Islands** — 网格版连通分量
- **261. Graph Valid Tree** — 连通分量 == 1 且无环
- **547. Number of Provinces** — 几乎一模一样，邻接矩阵输入
- **721. Accounts Merge** — Union-Find 进阶（字符串 key）
