# 74. Search a 2D Matrix

Treat 2D matrix as a flat sorted array, binary search with index mapping.

**Complexity:** Time O(log(m*n)), Space O(1)

## Python
```python
def searchMatrix(matrix: list[list[int]], target: int) -> bool:
    m, n = len(matrix), len(matrix[0])
    lo, hi = 0, m*n-1
    while lo <= hi:
        mid = (lo+hi)//2
        val = matrix[mid//n][mid%n]
        if val == target: return True
        elif val < target: lo = mid+1
        else: hi = mid-1
    return False
```

## TypeScript
```typescript
function searchMatrix(matrix: number[][], target: number): boolean {
    const m=matrix.length, n=matrix[0].length;
    let lo=0, hi=m*n-1;
    while(lo<=hi){
        const mid=(lo+hi)>>1, val=matrix[Math.floor(mid/n)][mid%n];
        if(val===target) return true;
        else if(val<target) lo=mid+1; else hi=mid-1;
    }
    return false;
}
```

## Go
```go
func searchMatrix(matrix [][]int, target int) bool {
    m, n := len(matrix), len(matrix[0])
    lo, hi := 0, m*n-1
    for lo<=hi {
        mid:=(lo+hi)/2; val:=matrix[mid/n][mid%n]
        if val==target { return true }
        if val<target { lo=mid+1 } else { hi=mid-1 }
    }
    return false
}
```
