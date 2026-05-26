# 46. Permutations

Backtracking: swap nums[start] with each nums[i≥start], recurse for start+1, swap back.

**Complexity:** Time O(n × n!), Space O(n)

## Python
```python
def permute(nums: list[int]) -> list[list[int]]:
    result = []
    def backtrack(start):
        if start == len(nums):
            result.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
    backtrack(0)
    return result
```

## TypeScript
```typescript
function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const backtrack = (start: number) => {
        if (start === nums.length) { result.push([...nums]); return; }
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    };
    backtrack(0);
    return result;
}
```

## Go
```go
func permute(nums []int) [][]int {
    result := [][]int{}
    var backtrack func(start int)
    backtrack = func(start int) {
        if start == len(nums) {
            tmp := make([]int, len(nums))
            copy(tmp, nums)
            result = append(result, tmp)
            return
        }
        for i := start; i < len(nums); i++ {
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
        }
    }
    backtrack(0)
    return result
}
```
