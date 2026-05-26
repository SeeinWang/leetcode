# 278. First Bad Version

Binary search: if mid is bad, search left half; otherwise search right half.

**Complexity:** Time O(log n), Space O(1)

## Python
```python
def firstBadVersion(n: int) -> int:
    left, right = 1, n
    while left < right:
        mid = (left + right) // 2
        if isBadVersion(mid):
            right = mid
        else:
            left = mid + 1
    return left
```

## TypeScript
```typescript
var solution = function(isBadVersion: (version: number) => boolean) {
    return function(n: number): number {
        let left = 1, right = n;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        return left;
    };
};
```

## Go
```go
func firstBadVersion(n int) int {
    left, right := 1, n
    for left < right {
        mid := left + (right-left)/2
        if isBadVersion(mid) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}
```
