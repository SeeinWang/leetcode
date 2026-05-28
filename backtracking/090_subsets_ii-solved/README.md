# 90. Subsets II

跟 78 一样的回溯框架，区别是数组里有重复元素，要去重。

**关键点：** 先排序，让重复元素相邻。回溯时在同一层（同一个 `start` 下）跳过和前一个相同的元素 —— `i > start && nums[i] == nums[i-1]`。

注意是 `i > start`，不是 `i > 0`：同一层内才跳，跨层（即把重复元素作为不同深度的选择）是允许的，否则像 `[1,1]` 这种子集就拿不到了。

**Complexity:** Time O(n × 2^n), Space O(n)

## Python
```python
def subsetsWithDup(nums: list[int]) -> list[list[int]]:
    nums.sort()
    result = []
    def backtrack(start, current):
        result.append(current[:])
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i - 1]:
                continue
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    backtrack(0, [])
    return result
```

## TypeScript
```typescript
function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    const backtrack = (start: number, current: number[]) => {
        result.push([...current]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
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
func subsetsWithDup(nums []int) [][]int {
    sort.Ints(nums)
    result := [][]int{}
    var backtrack func(start int, current []int)
    backtrack = func(start int, current []int) {
        tmp := make([]int, len(current))
        copy(tmp, current)
        result = append(result, tmp)
        for i := start; i < len(nums); i++ {
            if i > start && nums[i] == nums[i-1] {
                continue
            }
            backtrack(i+1, append(current, nums[i]))
        }
    }
    backtrack(0, []int{})
    return result
}
```
