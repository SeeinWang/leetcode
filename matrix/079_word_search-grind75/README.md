# 79. Word Search

DFS from each cell, mark visited temporarily.

**Complexity:** Time O(m*n*4^L), Space O(L)

## Python
```python
def exist(board: list[list[str]], word: str) -> bool:
    m, n = len(board), len(board[0])
    def dfs(r, c, idx):
        if idx == len(word): return True
        if r<0 or r>=m or c<0 or c>=n or board[r][c]!=word[idx]: return False
        temp=board[r][c]; board[r][c]='#'
        found=dfs(r+1,c,idx+1) or dfs(r-1,c,idx+1) or dfs(r,c+1,idx+1) or dfs(r,c-1,idx+1)
        board[r][c]=temp; return found
    return any(dfs(r,c,0) for r in range(m) for c in range(n))
```

## TypeScript
```typescript
function exist(board: string[][], word: string): boolean {
    const m=board.length, n=board[0].length;
    function dfs(r:number,c:number,idx:number): boolean {
        if(idx===word.length) return true;
        if(r<0||r>=m||c<0||c>=n||board[r][c]!==word[idx]) return false;
        const temp=board[r][c]; board[r][c]='#';
        const found=dfs(r+1,c,idx+1)||dfs(r-1,c,idx+1)||dfs(r,c+1,idx+1)||dfs(r,c-1,idx+1);
        board[r][c]=temp; return found;
    }
    for(let r=0;r<m;r++) for(let c=0;c<n;c++) if(dfs(r,c,0)) return true;
    return false;
}
```

## Go
```go
func exist(board [][]byte, word string) bool {
    m, n := len(board), len(board[0])
    var dfs func(r,c,idx int) bool
    dfs = func(r,c,idx int) bool {
        if idx==len(word) { return true }
        if r<0||r>=m||c<0||c>=n||board[r][c]!=word[idx] { return false }
        temp:=board[r][c]; board[r][c]='#'
        found:=dfs(r+1,c,idx+1)||dfs(r-1,c,idx+1)||dfs(r,c+1,idx+1)||dfs(r,c-1,idx+1)
        board[r][c]=temp; return found
    }
    for r:=0;r<m;r++ { for c:=0;c<n;c++ { if dfs(r,c,0) { return true } } }
    return false
}
```
