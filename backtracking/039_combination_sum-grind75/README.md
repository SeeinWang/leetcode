# 39. Combination Sum

Backtracking: try each candidate from current index; recurse with reduced target; backtrack on removal.

**Complexity:** Time O(n^(t/m)), Space O(t/m) where t=target, m=min candidate

## Python
```python
def combinationSum(candidates: list[int], target: int) -> list[list[int]]:
    result = []
    def backtrack(start, current, remaining):
        if remaining == 0:
            result.append(current[:])
            return
        for i in range(start, len(candidates)):
            if candidates[i] <= remaining:
                current.append(candidates[i])
                backtrack(i, current, remaining - candidates[i])
                current.pop()
    backtrack(0, [], target)
    return result
```

## TypeScript
```typescript
function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const backtrack = (start: number, current: number[], remaining: number) => {
        if (remaining === 0) { result.push([...current]); return; }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= remaining) {
                current.push(candidates[i]);
                backtrack(i, current, remaining - candidates[i]);
                current.pop();
            }
        }
    };
    backtrack(0, [], target);
    return result;
}
```

## Go
```go
func combinationSum(candidates []int, target int) [][]int {
    result := [][]int{}
    var backtrack func(start int, current []int, remaining int)
    backtrack = func(start int, current []int, remaining int) {
        if remaining == 0 {
            tmp := make([]int, len(current))
            copy(tmp, current)
            result = append(result, tmp)
            return
        }
        for i := start; i < len(candidates); i++ {
            if candidates[i] <= remaining {
                backtrack(i, append(current, candidates[i]), remaining-candidates[i])
            }
        }
    }
    backtrack(0, []int{}, target)
    return result
}
```
