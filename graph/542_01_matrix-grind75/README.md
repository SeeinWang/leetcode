# 542. 01 Matrix

## 题目
给定一个由 `0` 和 `1` 组成的 `m x n` 矩阵 `mat`，对每个格子返回它到**最近的 0** 的距离。相邻格子之间的距离为 `1`（仅上下左右）。

### Example
- Input: `mat = [[0,0,0],[0,1,0],[0,0,0]]` → `[[0,0,0],[0,1,0],[0,0,0]]`
- Input: `mat = [[0,0,0],[0,1,0],[1,1,1]]` → `[[0,0,0],[0,1,0],[1,2,1]]`

### Constraints
- `m == mat.length`，`n == mat[i].length`
- `1 <= m, n <= 10^4`，`1 <= m * n <= 10^4`
- `mat[i][j] ∈ {0, 1}`
- 矩阵中至少存在一个 `0`

## 思路
Multi-source BFS: initialize queue with all 0 cells, propagate distances outward level by level.

**Complexity:** Time O(m×n), Space O(m×n)

## Python
```python
from collections import deque

def updateMatrix(mat: list[list[int]]) -> list[list[int]]:
    m, n = len(mat), len(mat[0])
    dist = [[float('inf')] * n for _ in range(m)]
    queue = deque()
    for i in range(m):
        for j in range(n):
            if mat[i][j] == 0:
                dist[i][j] = 0
                queue.append((i, j))
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    while queue:
        r, c = queue.popleft()
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0 <= nr < m and 0 <= nc < n and dist[nr][nc] > dist[r][c] + 1:
                dist[nr][nc] = dist[r][c] + 1
                queue.append((nr, nc))
    return dist
```

## TypeScript
```typescript
function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length, n = mat[0].length;
    const dist = Array.from({length: m}, () => new Array(n).fill(Infinity));
    const queue: [number, number][] = [];
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (mat[i][j] === 0) { dist[i][j] = 0; queue.push([i, j]); }
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    for (let qi = 0; qi < queue.length; qi++) {
        const [r, c] = queue[qi];
        for (const [dr, dc] of dirs) {
            const [nr, nc] = [r+dr, c+dc];
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && dist[nr][nc] > dist[r][c] + 1) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
    return dist;
}
```

## Go
```go
func updateMatrix(mat [][]int) [][]int {
    m, n := len(mat), len(mat[0])
    dist := make([][]int, m)
    for i := range dist { dist[i] = make([]int, n); for j := range dist[i] { dist[i][j] = 1<<30 } }
    queue := [][2]int{}
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if mat[i][j] == 0 { dist[i][j] = 0; queue = append(queue, [2]int{i, j}) }
        }
    }
    dirs := [][2]int{{0,1},{0,-1},{1,0},{-1,0}}
    for len(queue) > 0 {
        r, c := queue[0][0], queue[0][1]; queue = queue[1:]
        for _, d := range dirs {
            nr, nc := r+d[0], c+d[1]
            if nr >= 0 && nr < m && nc >= 0 && nc < n && dist[nr][nc] > dist[r][c]+1 {
                dist[nr][nc] = dist[r][c] + 1
                queue = append(queue, [2]int{nr, nc})
            }
        }
    }
    return dist
}
```
