# 78. Subsets

Backtracking: at each index, decide to include or skip the element; collect all paths.

**Complexity:** Time O(n × 2^n), Space O(n)

## Python
```python
def subsets(nums: list[int]) -> list[list[int]]:
    result = []
    def backtrack(start, current):
        result.append(current[:])
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    backtrack(0, [])
    return result
```

## TypeScript
```typescript
function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const backtrack = (start: number, current: number[]) => {
        result.push([...current]);
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    };
    backtrack(0, []);
    return result;
}
```

## Go
```go
func subsets(nums []int) [][]int {
    result := [][]int{}
    var backtrack func(start int, current []int)
    backtrack = func(start int, current []int) {
        tmp := make([]int, len(current))
        copy(tmp, current)
        result = append(result, tmp)
        for i := start; i < len(nums); i++ {
            backtrack(i+1, append(current, nums[i]))
        }
    }
    backtrack(0, []int{})
    return result
}
```
