# 42. Trapping Rain Water

Two pointers: move the shorter side inward, water at each position = min(leftMax, rightMax) - height.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def trap(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    water = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max: left_max = height[left]
            else: water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max: right_max = height[right]
            else: water += right_max - height[right]
            right -= 1
    return water
```

## TypeScript
```typescript
function trap(height: number[]): number {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}
```

## Go
```go
func trap(height []int) int {
    left, right := 0, len(height)-1
    leftMax, rightMax, water := 0, 0, 0
    for left < right {
        if height[left] < height[right] {
            if height[left] >= leftMax { leftMax = height[left] } else { water += leftMax - height[left] }
            left++
        } else {
            if height[right] >= rightMax { rightMax = height[right] } else { water += rightMax - height[right] }
            right--
        }
    }
    return water
}
```
