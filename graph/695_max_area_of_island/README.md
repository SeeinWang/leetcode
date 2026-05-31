# 695. Max Area of Island

## 题目
给一个 `m x n` 的 0/1 矩阵 `grid`。岛屿由**上下左右**相邻的 `1` 组成，四周隐含水。
返回**最大岛屿的面积**（`1` 的个数）；若没有岛屿返回 `0`。

### Example
- Input: `grid = [[0,0,1,0,...],[0,0,0,0,...],...]` → `6`
- Input: `grid = [[0,0,0,0,0,0,0,0]]` → `0`

### Constraints
- `1 <= m, n <= 50`
- `grid[i][j]` 是 `0` 或 `1`

## 思路
和 200 一模一样的 DFS flood-fill，区别是 dfs **返回当前岛屿的面积**（自身 1 + 四个方向 dfs 之和），主循环维护 max。

**Complexity:** Time O(m*n), Space O(m*n) 递归栈

## Python
```python
def maxAreaOfIsland(grid: list[list[int]]) -> int:
    m, n = len(grid), len(grid[0])
    def dfs(r, c) -> int:
        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == 0:
            return 0
        grid[r][c] = 0
        return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1)
    res = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                res = max(res, dfs(i, j))
    return res
```

## TypeScript
```typescript
function maxAreaOfIsland(grid: number[][]): number {
    const [m, n] = [grid.length, grid[0].length];
    function dfs(r: number, c: number): number {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) return 0;
        grid[r][c] = 0;
        return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1);
    }
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) res = Math.max(res, dfs(i, j));
        }
    }
    return res;
}
```

## Go
```go
func maxAreaOfIsland(grid [][]int) int {
    m, n := len(grid), len(grid[0])
    var dfs func(r, c int) int
    dfs = func(r, c int) int {
        if r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0 { return 0 }
        grid[r][c] = 0
        return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1)
    }
    res := 0
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == 1 {
                if a := dfs(i, j); a > res { res = a }
            }
        }
    }
    return res
}
```
