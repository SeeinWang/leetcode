# 973. K Closest Points to Origin

Sort by squared distance (avoids sqrt), return first k.

**Complexity:** Time O(n log n), Space O(1)

## Python
```python
def kClosest(points: list[list[int]], k: int) -> list[list[int]]:
    points.sort(key=lambda p: p[0]**2 + p[1]**2)
    return points[:k]
```

## TypeScript
```typescript
function kClosest(points: number[][], k: number): number[][] {
    return points.sort((a, b) => (a[0]**2+a[1]**2) - (b[0]**2+b[1]**2)).slice(0, k);
}
```

## Go
```go
import "sort"

func kClosest(points [][]int, k int) [][]int {
    sort.Slice(points, func(i, j int) bool {
        di := points[i][0]*points[i][0] + points[i][1]*points[i][1]
        dj := points[j][0]*points[j][0] + points[j][1]*points[j][1]
        return di < dj
    })
    return points[:k]
}
```
