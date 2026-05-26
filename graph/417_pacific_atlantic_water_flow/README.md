# 417. Pacific Atlantic Water Flow

## 题目
给定一个 `m x n` 的整数矩阵 `heights`，表示一个岛屿大陆的海拔。左上方与上方是**太平洋**，右下方与下方是**大西洋**。水可以从一个格子流到相邻（上下左右）海拔**小于等于**当前格子的格子。返回所有水既能流向太平洋又能流向大西洋的格子坐标 `[r, c]` 列表。

### Example
- Input:
  ```
  heights = [[1,2,2,3,5],
             [3,2,3,4,4],
             [2,4,5,3,1],
             [6,7,1,4,5],
             [5,1,1,2,4]]
  ```
  → `[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]`
- Input: `heights = [[1]]` → `[[0,0]]`

### Constraints
- `m == heights.length`，`n == heights[r].length`
- `1 <= m, n <= 200`
- `0 <= heights[r][c] <= 10^5`

## 思路
BFS from ocean borders inward (reverse flow). Find intersection of reachable cells.

**Complexity:** Time O(m*n), Space O(m*n)

## Python
```python
from collections import deque

def pacificAtlantic(heights: list[list[int]]) -> list[list[int]]:
    m, n = len(heights), len(heights[0])
    def bfs(starts):
        visited = set(starts)
        q = deque(starts)
        while q:
            r, c = q.popleft()
            for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)]:
                nr, nc = r+dr, c+dc
                if 0<=nr<m and 0<=nc<n and (nr,nc) not in visited and heights[nr][nc]>=heights[r][c]:
                    visited.add((nr,nc)); q.append((nr,nc))
        return visited
    pac = [(0,c) for c in range(n)] + [(r,0) for r in range(1,m)]
    atl = [(m-1,c) for c in range(n)] + [(r,n-1) for r in range(m-1)]
    return [[r,c] for r,c in bfs(pac) & bfs(atl)]
```

## TypeScript
```typescript
function pacificAtlantic(heights: number[][]): number[][] {
    const m=heights.length, n=heights[0].length;
    function bfs(starts: [number,number][]): Set<string> {
        const visited = new Set<string>(starts.map(([r,c])=>`${r},${c}`));
        const q=[...starts];
        while(q.length){
            const [r,c]=q.shift()!;
            for(const [dr,dc] of [[0,1],[0,-1],[1,0],[-1,0]]){
                const nr=r+dr, nc=c+dc, key=`${nr},${nc}`;
                if(nr>=0&&nr<m&&nc>=0&&nc<n&&!visited.has(key)&&heights[nr][nc]>=heights[r][c]){
                    visited.add(key); q.push([nr,nc]);
                }
            }
        }
        return visited;
    }
    const pac: [number,number][]=[]; const atl: [number,number][]=[];
    for(let c=0;c<n;c++){pac.push([0,c]);atl.push([m-1,c]);}
    for(let r=1;r<m;r++){pac.push([r,0]);atl.push([r,n-1]);}
    const pR=bfs(pac), aR=bfs(atl);
    const res: number[][]=[];
    for(let r=0;r<m;r++) for(let c=0;c<n;c++) if(pR.has(`${r},${c}`)&&aR.has(`${r},${c}`)) res.push([r,c]);
    return res;
}
```

## Go
```go
func pacificAtlantic(heights [][]int) [][]int {
    m, n := len(heights), len(heights[0])
    dirs := [][2]int{{0,1},{0,-1},{1,0},{-1,0}}
    bfs := func(starts [][2]int) [][]bool {
        visited := make([][]bool, m)
        for i := range visited { visited[i] = make([]bool, n) }
        q := starts
        for _, s := range starts { visited[s[0]][s[1]] = true }
        for len(q) > 0 {
            pos := q[0]; q = q[1:]
            for _, d := range dirs {
                nr, nc := pos[0]+d[0], pos[1]+d[1]
                if nr>=0&&nr<m&&nc>=0&&nc<n&&!visited[nr][nc]&&heights[nr][nc]>=heights[pos[0]][pos[1]] {
                    visited[nr][nc]=true; q=append(q,[2]int{nr,nc})
                }
            }
        }
        return visited
    }
    var pac, atl [][2]int
    for c:=0;c<n;c++{pac=append(pac,[2]int{0,c});atl=append(atl,[2]int{m-1,c})}
    for r:=1;r<m;r++{pac=append(pac,[2]int{r,0});atl=append(atl,[2]int{r,n-1})}
    pR, aR := bfs(pac), bfs(atl)
    var res [][]int
    for r:=0;r<m;r++ { for c:=0;c<n;c++ { if pR[r][c]&&aR[r][c] { res=append(res,[]int{r,c}) } } }
    return res
}
```
