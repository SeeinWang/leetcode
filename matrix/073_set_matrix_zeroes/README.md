# 73. Set Matrix Zeroes

Use first row/column as markers. Handle first row/col separately.

**Complexity:** Time O(m*n), Space O(1)

## Python
```python
def setZeroes(matrix: list[list[int]]) -> None:
    m, n = len(matrix), len(matrix[0])
    first_row = any(matrix[0][j]==0 for j in range(n))
    first_col = any(matrix[i][0]==0 for i in range(m))
    for i in range(1,m):
        for j in range(1,n):
            if matrix[i][j]==0: matrix[i][0]=matrix[0][j]=0
    for i in range(1,m):
        for j in range(1,n):
            if matrix[i][0]==0 or matrix[0][j]==0: matrix[i][j]=0
    if first_row:
        for j in range(n): matrix[0][j]=0
    if first_col:
        for i in range(m): matrix[i][0]=0
```

## TypeScript
```typescript
function setZeroes(matrix: number[][]): void {
    const m=matrix.length, n=matrix[0].length;
    const fr=matrix[0].some(v=>v===0), fc=matrix.some(r=>r[0]===0);
    for(let i=1;i<m;i++) for(let j=1;j<n;j++) if(matrix[i][j]===0){matrix[i][0]=matrix[0][j]=0;}
    for(let i=1;i<m;i++) for(let j=1;j<n;j++) if(matrix[i][0]===0||matrix[0][j]===0) matrix[i][j]=0;
    if(fr) for(let j=0;j<n;j++) matrix[0][j]=0;
    if(fc) for(let i=0;i<m;i++) matrix[i][0]=0;
}
```

## Go
```go
func setZeroes(matrix [][]int) {
    m, n := len(matrix), len(matrix[0])
    fr, fc := false, false
    for j:=0;j<n;j++ { if matrix[0][j]==0 { fr=true } }
    for i:=0;i<m;i++ { if matrix[i][0]==0 { fc=true } }
    for i:=1;i<m;i++ { for j:=1;j<n;j++ { if matrix[i][j]==0 { matrix[i][0]=0; matrix[0][j]=0 } } }
    for i:=1;i<m;i++ { for j:=1;j<n;j++ { if matrix[i][0]==0||matrix[0][j]==0 { matrix[i][j]=0 } } }
    if fr { for j:=0;j<n;j++ { matrix[0][j]=0 } }
    if fc { for i:=0;i<m;i++ { matrix[i][0]=0 } }
}
```
