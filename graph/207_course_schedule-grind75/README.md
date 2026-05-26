# 207. Course Schedule

## 题目
共有 `numCourses` 门课，标号 `0` 到 `numCourses - 1`。给定 `prerequisites`，其中 `prerequisites[i] = [a, b]` 表示要学课程 `a` 必须先学课程 `b`。判断是否能修完所有课程，返回 `true` 或 `false`。

等价于：判断有向图（先修关系）是否**无环**。

### Example
- Input: `numCourses = 2, prerequisites = [[1,0]]` → `true`
- Input: `numCourses = 2, prerequisites = [[1,0],[0,1]]` → `false`（互为先修，成环）

### Constraints
- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`，所有 `[a,b]` 对唯一

## 思路
Detect cycle in directed graph using DFS with 3-state coloring (0=unvisited, 1=visiting, 2=done).

**Complexity:** Time O(V+E), Space O(V+E)

## Python
```python
def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:
    graph = [[] for _ in range(numCourses)]
    for a, b in prerequisites: graph[b].append(a)
    state = [0] * numCourses
    def dfs(node):
        if state[node] == 1: return False
        if state[node] == 2: return True
        state[node] = 1
        for nb in graph[node]:
            if not dfs(nb): return False
        state[node] = 2; return True
    return all(dfs(i) for i in range(numCourses))
```

## TypeScript
```typescript
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = Array.from({length: numCourses}, () => [] as number[]);
    for (const [a, b] of prerequisites) graph[b].push(a);
    const state = new Array(numCourses).fill(0);
    function dfs(node: number): boolean {
        if (state[node] === 1) return false;
        if (state[node] === 2) return true;
        state[node] = 1;
        for (const nb of graph[node]) if (!dfs(nb)) return false;
        state[node] = 2; return true;
    }
    for (let i = 0; i < numCourses; i++) if (!dfs(i)) return false;
    return true;
}
```

## Go
```go
func canFinish(numCourses int, prerequisites [][]int) bool {
    graph := make([][]int, numCourses)
    for _, p := range prerequisites { graph[p[1]] = append(graph[p[1]], p[0]) }
    state := make([]int, numCourses)
    var dfs func(int) bool
    dfs = func(node int) bool {
        if state[node] == 1 { return false }
        if state[node] == 2 { return true }
        state[node] = 1
        for _, nb := range graph[node] { if !dfs(nb) { return false } }
        state[node] = 2; return true
    }
    for i := 0; i < numCourses; i++ { if !dfs(i) { return false } }
    return true
}
```
