# 994. Rotting Oranges

## 题目
给定 `m x n` 网格 `grid`，每个格子有三种值：
- `0`：空格
- `1`：新鲜橘子
- `2`：腐烂橘子

每分钟，任何与腐烂橘子**上下左右相邻**的新鲜橘子都会变腐烂。返回直到没有新鲜橘子为止所需的最少分钟数；若**不可能**让所有新鲜橘子腐烂，返回 `-1`。

### Example
- Input: `grid = [[2,1,1],[1,1,0],[0,1,1]]` → `4`
- Input: `grid = [[2,1,1],[0,1,1],[1,0,1]]` → `-1`（左下的新鲜橘子无法被感染）
- Input: `grid = [[0,2]]` → `0`（没有新鲜橘子）

### Constraints
- `m == grid.length`，`n == grid[i].length`
- `1 <= m, n <= 10`
- `grid[i][j] ∈ {0, 1, 2}`

## 思路
Multi-source BFS from all rotten oranges; track fresh count and elapsed minutes.

**Complexity:** Time O(m×n), Space O(m×n)

## Python
```python
from collections import deque

def orangesRotting(grid: list[list[int]]) -> int:
    m, n = len(grid), len(grid[0])
    queue = deque()
    fresh = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 2: queue.append((i, j, 0))
            elif grid[i][j] == 1: fresh += 1
    minutes = 0
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    while queue:
        r, c, t = queue.popleft()
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                grid[nr][nc] = 2
                fresh -= 1
                minutes = t + 1
                queue.append((nr, nc, t + 1))
    return minutes if fresh == 0 else -1
```

## TypeScript
```typescript
function orangesRotting(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    const queue: [number, number, number][] = [];
    let fresh = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (grid[i][j] === 2) queue.push([i, j, 0]);
            else if (grid[i][j] === 1) fresh++;
    let minutes = 0;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    for (let qi = 0; qi < queue.length; qi++) {
        const [r, c, t] = queue[qi];
        for (const [dr, dc] of dirs) {
            const [nr, nc] = [r+dr, c+dc];
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
                grid[nr][nc] = 2; fresh--; minutes = t + 1;
                queue.push([nr, nc, t + 1]);
            }
        }
    }
    return fresh === 0 ? minutes : -1;
}
```

## Go
```go
func orangesRotting(grid [][]int) int {
    m, n := len(grid), len(grid[0])
    type state struct{ r, c, t int }
    queue := []state{}
    fresh := 0
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == 2 { queue = append(queue, state{i, j, 0}) }
            if grid[i][j] == 1 { fresh++ }
        }
    }
    minutes := 0
    dirs := [][2]int{{0,1},{0,-1},{1,0},{-1,0}}
    for len(queue) > 0 {
        s := queue[0]; queue = queue[1:]
        for _, d := range dirs {
            nr, nc := s.r+d[0], s.c+d[1]
            if nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1 {
                grid[nr][nc] = 2; fresh--; minutes = s.t + 1
                queue = append(queue, state{nr, nc, s.t + 1})
            }
        }
    }
    if fresh > 0 { return -1 }
    return minutes
}
```
