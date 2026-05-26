# 733. Flood Fill

## 题目
给定一个 `m x n` 整数图像 `image`，以及一个起始像素 `(sr, sc)` 和颜色 `color`。从 `(sr, sc)` 出发，把所有**通过上下左右连通**且颜色与起始像素**相同**的像素都改为 `color`，返回修改后的图像。

### Example
- Input: `image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2`  
  → `[[2,2,2],[2,2,0],[2,0,1]]`
- Input: `image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0`  
  → `[[0,0,0],[0,0,0]]`（原色等于新色，无需变化）

### Constraints
- `m == image.length`，`n == image[i].length`
- `1 <= m, n <= 50`
- `0 <= image[i][j], color < 2^16`
- `0 <= sr < m`，`0 <= sc < n`

## 思路
DFS from start pixel, paint connected same-color cells.

**Complexity:** Time O(m*n), Space O(m*n)

## Python
```python
def floodFill(image: list[list[int]], sr: int, sc: int, color: int) -> list[list[int]]:
    orig = image[sr][sc]
    if orig == color: return image
    def dfs(r, c):
        if r < 0 or r >= len(image) or c < 0 or c >= len(image[0]) or image[r][c] != orig: return
        image[r][c] = color
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)
    dfs(sr, sc)
    return image
```

## TypeScript
```typescript
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const orig = image[sr][sc];
    if (orig === color) return image;
    function dfs(r: number, c: number): void {
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== orig) return;
        image[r][c] = color;
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);
    }
    dfs(sr, sc); return image;
}
```

## Go
```go
func floodFill(image [][]int, sr, sc, color int) [][]int {
    orig := image[sr][sc]
    if orig == color { return image }
    var dfs func(r, c int)
    dfs = func(r, c int) {
        if r < 0 || r >= len(image) || c < 0 || c >= len(image[0]) || image[r][c] != orig { return }
        image[r][c] = color
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)
    }
    dfs(sr, sc); return image
}
```
