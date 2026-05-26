# 59. Spiral Matrix II

Simulate spiral with four boundaries (top/bottom/left/right), shrink after each direction.

**Complexity:** Time O(n²), Space O(n²)

## Python
```python
def generateMatrix(n: int) -> list[list[int]]:
    matrix = [[0] * n for _ in range(n)]
    top, bottom, left, right = 0, n - 1, 0, n - 1
    num = 1
    while top <= bottom and left <= right:
        for i in range(left, right + 1):
            matrix[top][i] = num; num += 1
        top += 1
        for i in range(top, bottom + 1):
            matrix[i][right] = num; num += 1
        right -= 1
        for i in range(right, left - 1, -1):
            matrix[bottom][i] = num; num += 1
        bottom -= 1
        for i in range(bottom, top - 1, -1):
            matrix[i][left] = num; num += 1
        left += 1
    return matrix
```

## TypeScript
```typescript
function generateMatrix(n: number): number[][] {
    const matrix = Array.from({ length: n }, () => new Array(n).fill(0));
    let top = 0, bottom = n - 1, left = 0, right = n - 1, num = 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) matrix[top][i] = num++;
        top++;
        for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
        right--;
        for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
        bottom--;
        for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
        left++;
    }
    return matrix;
}
```

## Go
```go
func generateMatrix(n int) [][]int {
    matrix := make([][]int, n)
    for i := range matrix {
        matrix[i] = make([]int, n)
    }
    top, bottom, left, right, num := 0, n-1, 0, n-1, 1
    for top <= bottom && left <= right {
        for i := left; i <= right; i++ { matrix[top][i] = num; num++ }
        top++
        for i := top; i <= bottom; i++ { matrix[i][right] = num; num++ }
        right--
        for i := right; i >= left; i-- { matrix[bottom][i] = num; num++ }
        bottom--
        for i := bottom; i >= top; i-- { matrix[i][left] = num; num++ }
        left++
    }
    return matrix
}
```
