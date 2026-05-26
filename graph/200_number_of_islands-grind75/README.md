# 200. Number of Islands

## 题目
给定一个 `m x n` 的二维网格 `grid`，由 `'1'`（陆地）和 `'0'`（水）组成。计算并返回岛屿的数量。岛屿由相邻陆地水平或垂直连接形成（不包括对角线），网格四周都被水包围。

### Example
- Input:
  ```
  [["1","1","1","1","0"],
   ["1","1","0","1","0"],
   ["1","1","0","0","0"],
   ["0","0","0","0","0"]]
  ```
  → `1`
- Input:
  ```
  [["1","1","0","0","0"],
   ["1","1","0","0","0"],
   ["0","0","1","0","0"],
   ["0","0","0","1","1"]]
  ```
  → `3`

### Constraints
- `1 <= m, n <= 300`
- `grid[i][j]` 为 `'0'` 或 `'1'`

## 思路
DFS from each '1', sinking the island (marking as '0').

**Complexity:** Time O(m*n), Space O(m*n)

## Python
```python
def numIslands(grid: list[list[str]]) -> int:
    m, n, count = len(grid), len(grid[0]), 0
    def dfs(r, c):
        if r<0 or r>=m or c<0 or c>=n or grid[r][c]!='1': return
        grid[r][c]='0'
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)
    for r in range(m):
        for c in range(n):
            if grid[r][c]=='1': dfs(r,c); count+=1
    return count
```

## TypeScript
```typescript
function numIslands(grid: string[][]): number {
    const m=grid.length, n=grid[0].length; let count=0;
    function dfs(r: number, c: number): void {
        if (r<0||r>=m||c<0||c>=n||grid[r][c]!=='1') return;
        grid[r][c]='0'; dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);
    }
    for (let r=0; r<m; r++) for (let c=0; c<n; c++) if (grid[r][c]==='1') { dfs(r,c); count++; }
    return count;
}
```

## Go
```go
func numIslands(grid [][]byte) int {
    m, n, count := len(grid), len(grid[0]), 0
    var dfs func(r, c int)
    dfs = func(r, c int) {
        if r<0||r>=m||c<0||c>=n||grid[r][c]!='1' { return }
        grid[r][c]='0'; dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)
    }
    for r:=0; r<m; r++ { for c:=0; c<n; c++ { if grid[r][c]=='1' { dfs(r,c); count++ } } }
    return count
}
```
