# 48. Rotate Image

Transpose then reverse each row (90° clockwise = transpose + reverse rows).

**Complexity:** Time O(n²), Space O(1)

## Python
```python
def rotate(matrix: list[list[int]]) -> None:
    n = len(matrix)
    for i in range(n):
        for j in range(i+1, n): matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix: row.reverse()
```

## TypeScript
```typescript
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    for(let i=0;i<n;i++) for(let j=i+1;j<n;j++) [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
    for(const row of matrix) row.reverse();
}
```

## Go
```go
func rotate(matrix [][]int) {
    n := len(matrix)
    for i:=0;i<n;i++ { for j:=i+1;j<n;j++ { matrix[i][j],matrix[j][i]=matrix[j][i],matrix[i][j] } }
    for _,row:=range matrix { for l,r:=0,len(row)-1; l<r; l,r=l+1,r-1 { row[l],row[r]=row[r],row[l] } }
}
```
