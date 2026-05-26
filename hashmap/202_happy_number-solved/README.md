# 202. Happy Number

Use a set to detect cycles; repeatedly sum digit squares until 1 or seen before.

**Complexity:** Time O(log n), Space O(log n)

## Python
```python
def isHappy(n: int) -> bool:
    seen = set()
    while n != 1:
        if n in seen:
            return False
        seen.add(n)
        n = sum(int(d) ** 2 for d in str(n))
    return True
```

## TypeScript
```typescript
function isHappy(n: number): boolean {
    const seen = new Set<number>();
    while (n !== 1) {
        if (seen.has(n)) return false;
        seen.add(n);
        n = String(n).split('').reduce((sum, d) => sum + Number(d) ** 2, 0);
    }
    return true;
}
```

## Go
```go
func isHappy(n int) bool {
    seen := make(map[int]bool)
    for n != 1 {
        if seen[n] { return false }
        seen[n] = true
        sum := 0
        for n > 0 {
            d := n % 10
            sum += d * d
            n /= 10
        }
        n = sum
    }
    return true
}
```
