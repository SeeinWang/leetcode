# 11. Container With Most Water

Two pointers: always move the pointer with the shorter height; track maximum area.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def maxArea(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        water = min(height[left], height[right]) * (right - left)
        max_water = max(max_water, water)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water
```

## TypeScript
```typescript
function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1, maxWater = 0;
    while (left < right) {
        maxWater = Math.max(maxWater, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}
```

## Go
```go
func maxArea(height []int) int {
    left, right, maxWater := 0, len(height)-1, 0
    for left < right {
        water := (right - left) * min(height[left], height[right])
        if water > maxWater { maxWater = water }
        if height[left] < height[right] { left++ } else { right-- }
    }
    return maxWater
}
func min(a, b int) int { if a < b { return a }; return b }
```
