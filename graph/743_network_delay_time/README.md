# 743. Network Delay Time

## 题目
`n` 个节点（标号 `1..n`），有向带权图 `times[i] = [u, v, w]` 表示 `u → v` 需要 `w` 时间。从节点 `k` 发出信号，求**所有节点都收到信号所需的最短时间**；若有节点不可达，返回 `-1`。

本质：从 `k` 出发跑 **Dijkstra 单源最短路**，答案是 `max(dist[1..n])`；若某节点 `dist = ∞`，返回 `-1`。

### Example
- Input: `times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2` → `2`
- Input: `times = [[1,2,1]], n = 2, k = 1` → `1`
- Input: `times = [[1,2,1]], n = 2, k = 2` → `-1`

### Constraints
- `1 <= k <= n <= 100`，`1 <= times.length <= 6000`
- `0 <= wi <= 100`（边权非负 → 适用 Dijkstra）

## 思路

### Dijkstra 模板（最小堆）
1. 建邻接表：`graph[u] = [(v, w), ...]`
2. `dist[i] = ∞`，`dist[k] = 0`
3. 最小堆放 `(d, node)`，初始 `(0, k)`
4. 循环：pop 最小 `(d, u)`；若 `d > dist[u]` 跳过（已处理过更优）；否则松弛每条 `(u → v)`：若 `d + w < dist[v]`，更新并入堆
5. 跑完后 `ans = max(dist[1..n])`；若有 `∞` 返回 `-1`

**为什么用堆而不是普通队列？** Dijkstra 每次要选**当前未确定节点中 dist 最小**的去松弛——这是贪心正确性的保证，普通 BFS 不行（BFS 只适合**等权图**）。

**Complexity:** Time O((V+E) log V), Space O(V+E)

## Python (heapq)
```python
import heapq
from collections import defaultdict

class Solution:
    def networkDelayTime(self, times, n, k):
        graph = defaultdict(list)
        for u, v, w in times:
            graph[u].append((v, w))
        dist = {i: float('inf') for i in range(1, n + 1)}
        dist[k] = 0
        heap = [(0, k)]
        while heap:
            d, u = heapq.heappop(heap)
            if d > dist[u]:
                continue
            for v, w in graph[u]:
                nd = d + w
                if nd < dist[v]:
                    dist[v] = nd
                    heapq.heappush(heap, (nd, v))
        ans = max(dist.values())
        return ans if ans < float('inf') else -1
```

## TypeScript
TS 标准库没有堆，要么自己写 MinHeap，要么用数组排序近似。下面用一个最小堆：
```typescript
class MinHeap {
    private heap: [number, number][] = []
    push(x: [number, number]) {
        this.heap.push(x)
        let i = this.heap.length - 1
        while (i > 0) {
            const p = (i - 1) >> 1
            if (this.heap[p][0] <= this.heap[i][0]) break
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
            i = p
        }
    }
    pop(): [number, number] | undefined {
        if (!this.heap.length) return undefined
        const top = this.heap[0]
        const last = this.heap.pop()!
        if (this.heap.length) {
            this.heap[0] = last
            let i = 0, n = this.heap.length
            while (true) {
                const l = 2 * i + 1, r = 2 * i + 2
                let s = i
                if (l < n && this.heap[l][0] < this.heap[s][0]) s = l
                if (r < n && this.heap[r][0] < this.heap[s][0]) s = r
                if (s === i) break
                [this.heap[s], this.heap[i]] = [this.heap[i], this.heap[s]]
                i = s
            }
        }
        return top
    }
    size() { return this.heap.length }
}

function networkDelayTime(times: number[][], n: number, k: number): number {
    const graph: [number, number][][] = Array.from({length: n + 1}, () => [])
    for (const [u, v, w] of times) graph[u].push([v, w])
    const dist = new Array(n + 1).fill(Infinity)
    dist[k] = 0
    const heap = new MinHeap()
    heap.push([0, k])
    while (heap.size()) {
        const [d, u] = heap.pop()!
        if (d > dist[u]) continue
        for (const [v, w] of graph[u]) {
            const nd = d + w
            if (nd < dist[v]) {
                dist[v] = nd
                heap.push([nd, v])
            }
        }
    }
    let ans = 0
    for (let i = 1; i <= n; i++) ans = Math.max(ans, dist[i])
    return ans === Infinity ? -1 : ans
}
```

## Go (container/heap)
```go
import "container/heap"

type Item struct{ dist, node int }
type PQ []Item
func (p PQ) Len() int            { return len(p) }
func (p PQ) Less(i, j int) bool  { return p[i].dist < p[j].dist }
func (p PQ) Swap(i, j int)       { p[i], p[j] = p[j], p[i] }
func (p *PQ) Push(x interface{}) { *p = append(*p, x.(Item)) }
func (p *PQ) Pop() interface{}   { o := *p; x := o[len(o)-1]; *p = o[:len(o)-1]; return x }

func networkDelayTime(times [][]int, n int, k int) int {
    graph := make([][][2]int, n+1)
    for _, t := range times {
        graph[t[0]] = append(graph[t[0]], [2]int{t[1], t[2]})
    }
    const INF = 1 << 30
    dist := make([]int, n+1)
    for i := range dist { dist[i] = INF }
    dist[k] = 0
    pq := &PQ{{0, k}}
    heap.Init(pq)
    for pq.Len() > 0 {
        it := heap.Pop(pq).(Item)
        d, u := it.dist, it.node
        if d > dist[u] { continue }
        for _, e := range graph[u] {
            v, w := e[0], e[1]
            if d+w < dist[v] {
                dist[v] = d + w
                heap.Push(pq, Item{d + w, v})
            }
        }
    }
    ans := 0
    for i := 1; i <= n; i++ {
        if dist[i] == INF { return -1 }
        if dist[i] > ans { ans = dist[i] }
    }
    return ans
}
```

## 关联题（Dijkstra 同款模板）
- **787. Cheapest Flights Within K Stops** — Dijkstra 加 K 限制（也可 Bellman-Ford）
- **1631. Path With Minimum Effort** — 网格 Dijkstra，把 max(edge) 当 dist
- **778. Swim in Rising Water** — 网格 Dijkstra 变体
- **1514. Path with Maximum Probability** — 最大概率 = 用 max-heap 跑 Dijkstra
- **2642. Design Graph with Shortest Path Calculator** — 多次查询 Dijkstra
