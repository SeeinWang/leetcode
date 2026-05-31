# 210. Course Schedule II

## 题目
共有 `numCourses` 门课，标号 `0` 到 `numCourses - 1`。给定 `prerequisites`，其中 `prerequisites[i] = [a, b]` 表示要学课程 `a` 必须先学课程 `b`。**返回一个可行的修课顺序**；若有多解返回任意一种；若不可能完成，返回空数组 `[]`。

等价于：返回有向图（先修关系）的**拓扑序**；若存在环则返回 `[]`。

### Example
- Input: `numCourses = 2, prerequisites = [[1,0]]` → `[0,1]`
- Input: `numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]` → `[0,2,1,3]`（或 `[0,1,2,3]`）
- Input: `numCourses = 1, prerequisites = []` → `[0]`

### Constraints
- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
- 所有 `[a, b]` 对唯一，`a != b`

## 思路
**Kahn's 算法（BFS 拓扑排序）：**
1. 建邻接表 `graph[b] -> [a, ...]`（学完 b 后能解锁 a），同时统计每门课的入度 `indegree[]`。
2. 把所有入度为 0 的课入队（没有先修，可以直接学）。
3. BFS：每次出队一门课，加入结果数组，把它所有后继的入度 -1；若后继入度变 0 入队。
4. 最后若结果数组长度 == `numCourses` 返回结果；否则有环，返回 `[]`。

**对比 207：** 207 只判断是否能完成（true/false），210 要求返回顺序——其实就是 Kahn 算法 pop 出来的顺序。

**Complexity:** Time O(V+E), Space O(V+E)

## Python
```python
from collections import deque

def findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:
    graph = [[] for _ in range(numCourses)]
    indeg = [0] * numCourses
    for a, b in prerequisites:
        graph[b].append(a)
        indeg[a] += 1
    queue = deque(i for i in range(numCourses) if indeg[i] == 0)
    order = []
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in graph[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                queue.append(v)
    return order if len(order) == numCourses else []
```

## TypeScript
```typescript
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: number[][] = Array.from({length: numCourses}, () => [])
    const indeg: number[] = new Array(numCourses).fill(0)
    for (const [a, b] of prerequisites) {
        graph[b].push(a)
        indeg[a]++
    }
    const queue: number[] = []
    for (let i = 0; i < numCourses; i++) {
        if (indeg[i] === 0) queue.push(i)
    }
    const order: number[] = []
    let head = 0
    while (head < queue.length) {
        const u = queue[head++]
        order.push(u)
        for (const v of graph[u]) {
            if (--indeg[v] === 0) queue.push(v)
        }
    }
    return order.length === numCourses ? order : []
}
```

## Go
```go
func findOrder(numCourses int, prerequisites [][]int) []int {
    graph := make([][]int, numCourses)
    indeg := make([]int, numCourses)
    for _, p := range prerequisites {
        a, b := p[0], p[1]
        graph[b] = append(graph[b], a)
        indeg[a]++
    }
    queue := []int{}
    for i := 0; i < numCourses; i++ {
        if indeg[i] == 0 {
            queue = append(queue, i)
        }
    }
    order := []int{}
    for len(queue) > 0 {
        u := queue[0]
        queue = queue[1:]
        order = append(order, u)
        for _, v := range graph[u] {
            indeg[v]--
            if indeg[v] == 0 {
                queue = append(queue, v)
            }
        }
    }
    if len(order) == numCourses {
        return order
    }
    return []int{}
}
```
