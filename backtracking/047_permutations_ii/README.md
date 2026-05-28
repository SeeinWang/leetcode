# 47. Permutations II

Backtracking with `used[]` + sort. Same-level dedupe: skip `nums[i]` if it equals `nums[i-1]` and the previous duplicate is **not** currently used (meaning the sibling branch already covered it).

**Complexity:** Time O(n × n!), Space O(n)

**Key vs 46:**
1. `nums.sort()` so duplicates are adjacent
2. Extra prune: `if i > 0 && nums[i] === nums[i-1] && !used[i-1]: skip`

## Python
```python
def permuteUnique(nums: list[int]) -> list[list[int]]:
    result = []
    nums.sort()
    used = [False] * len(nums)
    path = []
    def backtrack():
        if len(path) == len(nums):
            result.append(path[:])
            return
        for i in range(len(nums)):
            if used[i]:
                continue
            if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]:
                continue
            used[i] = True
            path.append(nums[i])
            backtrack()
            path.pop()
            used[i] = False
    backtrack()
    return result
```

## TypeScript
```typescript
function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    const used: boolean[] = new Array(nums.length).fill(false);
    const path: number[] = [];
    const backtrack = () => {
        if (path.length === nums.length) { result.push([...path]); return; }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtrack();
            path.pop();
            used[i] = false;
        }
    };
    backtrack();
    return result;
}
```

## Go
```go
func permuteUnique(nums []int) [][]int {
    sort.Ints(nums)
    result := [][]int{}
    used := make([]bool, len(nums))
    path := []int{}
    var backtrack func()
    backtrack = func() {
        if len(path) == len(nums) {
            tmp := make([]int, len(path))
            copy(tmp, path)
            result = append(result, tmp)
            return
        }
        for i := 0; i < len(nums); i++ {
            if used[i] {
                continue
            }
            if i > 0 && nums[i] == nums[i-1] && !used[i-1] {
                continue
            }
            used[i] = true
            path = append(path, nums[i])
            backtrack()
            path = path[:len(path)-1]
            used[i] = false
        }
    }
    backtrack()
    return result
}
```
