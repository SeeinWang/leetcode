# 53. Maximum Subarray

Kadane's Algorithm: track current sum, reset to current element if it's larger.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def maxSubArray(nums: list[int]) -> int:
    max_sum = nums[0]
    current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum
```

## TypeScript
```typescript
function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
```

## Go
```go
func maxSubArray(nums []int) int {
    maxSum := nums[0]
    currentSum := nums[0]
    for _, num := range nums[1:] {
        if currentSum+num > num {
            currentSum += num
        } else {
            currentSum = num
        }
        if currentSum > maxSum {
            maxSum = currentSum
        }
    }
    return maxSum
}
```
