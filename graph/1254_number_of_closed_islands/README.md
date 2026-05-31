# 1254. Number of Closed Islands

## 题目
给一个 0/1 矩阵：**`0` 是陆地，`1` 是水**（和 200 反过来！）。岛屿由 4 方向相邻的 `0` 组成。
**封闭岛**：四周完全被水包围，即**不接触边界**的岛。
返回封闭岛数量。

### Example
- Input: 5×8 grid → `2`
- Input: `[[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]` → `1`

### Constraints
- `1 <= m, n <= 100`
- `grid[i][j] ∈ {0, 1}`

## 思路
两种主流写法，**法二（推荐）更干净**：

### 法一：在 DFS 里判断是否触边
DFS 一块陆地时，若走到越界则该岛**不封闭**；遍历完整块岛后返回布尔值。注意要**完整遍历完**再返回（不能短路），否则没标记完会重复计数。

### 法二：先把边界岛"淹没"，再数普通岛 ⭐
1. 先 DFS 所有**边界上**的 `0`，把它们整片标为 `1`（淹没）
2. 剩下的 `0` 一定是封闭岛，按 200 的方式数即可

**Complexity:** Time O(m*n), Space O(m*n)

## Python（法二）
```python
def closedIsland(grid: list[list[int]]) -> int:
    m, n = len(grid), len(grid[0])
    def dfs(r, c):
        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == 1:
            return
        grid[r][c] = 1
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)
    # 淹掉所有触边的岛
    for i in range(m):
        dfs(i, 0); dfs(i, n-1)
    for j in range(n):
        dfs(0, j); dfs(m-1, j)
    # 剩下的就是封闭岛
    res = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 0:
                res += 1
                dfs(i, j)
    return res
```

## TypeScript（法二）
```typescript
function closedIsland(grid: number[][]): number {
    const [m, n] = [grid.length, grid[0].length];
    function dfs(r: number, c: number): void {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 1) return;
        grid[r][c] = 1;
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);
    }
    for (let i = 0; i < m; i++) { dfs(i, 0); dfs(i, n-1); }
    for (let j = 0; j < n; j++) { dfs(0, j); dfs(m-1, j); }
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) { res++; dfs(i, j); }
        }
    }
    return res;
}
```

## Go（法二）
```go
func closedIsland(grid [][]int) int {
    m, n := len(grid), len(grid[0])
    var dfs func(r, c int)
    dfs = func(r, c int) {
        if r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 1 { return }
        grid[r][c] = 1
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)
    }
    for i := 0; i < m; i++ { dfs(i, 0); dfs(i, n-1) }
    for j := 0; j < n; j++ { dfs(0, j); dfs(m-1, j) }
    res := 0
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == 0 { res++; dfs(i, j) }
        }
    }
    return res
}
```

## 易错点
- **陆/水反了**：`0` 是地、`1` 是水
- 法一里 dfs 不能短路 return，必须四个方向都走完再判断
- 法二的"淹边界"思路通用，处理 **130 Surrounded Regions** 也是同一招
