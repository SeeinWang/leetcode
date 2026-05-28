# 77. Combinations

Backtracking with `start` index — same template as Subsets (78), but only collect when `path.length === k`.

**Complexity:** Time O(C(n,k) × k), Space O(k)

**Key idea:** Combinations are order-insensitive, so use `start` to only pick larger numbers going down.

**Optional pruning:** at each level, `i` only needs to go up to `n - (k - path.length) + 1` — beyond that, not enough numbers remain to fill `k`.

## Python
```python
def combine(n: int, k: int) -> list[list[int]]:
    result = []
    path = []
    def backtrack(start):
        if len(path) == k:
            result.append(path[:])
            return
        # prune: need (k - len(path)) more, so i <= n - (k - len(path)) + 1
        for i in range(start, n - (k - len(path)) + 2):
            path.append(i)
            backtrack(i + 1)
            path.pop()
    backtrack(1)
    return result
```

## TypeScript
```typescript
function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    const path: number[] = [];
    const backtrack = (start: number) => {
        if (path.length === k) { result.push([...path]); return; }
        const end = n - (k - path.length) + 1;
        for (let i = start; i <= end; i++) {
            path.push(i);
            backtrack(i + 1);
            path.pop();
        }
    };
    backtrack(1);
    return result;
}
```

## Go
```go
func combine(n int, k int) [][]int {
    result := [][]int{}
    path := []int{}
    var backtrack func(start int)
    backtrack = func(start int) {
        if len(path) == k {
            tmp := make([]int, k)
            copy(tmp, path)
            result = append(result, tmp)
            return
        }
        end := n - (k - len(path)) + 1
        for i := start; i <= end; i++ {
            path = append(path, i)
            backtrack(i + 1)
            path = path[:len(path)-1]
        }
    }
    backtrack(1)
    return result
}
```
