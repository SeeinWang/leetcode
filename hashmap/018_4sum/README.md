# 18. 4Sum

Sort, fix two pointers, use two-pointer technique for remaining pair; skip duplicates at each level.

**Complexity:** Time O(n³), Space O(1)

## Python
```python
def fourSum(nums: list[int], target: int) -> list[list[int]]:
    nums.sort()
    result = []
    n = len(nums)
    for i in range(n - 3):
        if i > 0 and nums[i] == nums[i - 1]: continue
        for j in range(i + 1, n - 2):
            if j > i + 1 and nums[j] == nums[j - 1]: continue
            left, right = j + 1, n - 1
            while left < right:
                total = nums[i] + nums[j] + nums[left] + nums[right]
                if total == target:
                    result.append([nums[i], nums[j], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]: left += 1
                    while left < right and nums[right] == nums[right - 1]: right -= 1
                    left += 1; right -= 1
                elif total < target:
                    left += 1
                else:
                    right -= 1
    return result
```

## TypeScript
```typescript
function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    const n = nums.length;
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1, right = n - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++; right--;
                } else if (sum < target) left++;
                else right--;
            }
        }
    }
    return result;
}
```

## Go
```go
func fourSum(nums []int, target int) [][]int {
    sort.Ints(nums)
    result := [][]int{}
    n := len(nums)
    for i := 0; i < n-3; i++ {
        if i > 0 && nums[i] == nums[i-1] { continue }
        for j := i + 1; j < n-2; j++ {
            if j > i+1 && nums[j] == nums[j-1] { continue }
            left, right := j+1, n-1
            for left < right {
                sum := nums[i] + nums[j] + nums[left] + nums[right]
                if sum == target {
                    result = append(result, []int{nums[i], nums[j], nums[left], nums[right]})
                    for left < right && nums[left] == nums[left+1] { left++ }
                    for left < right && nums[right] == nums[right-1] { right-- }
                    left++; right--
                } else if sum < target {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return result
}
```
