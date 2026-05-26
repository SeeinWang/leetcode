# 56. Merge Intervals

Sort by start time; merge each interval with the last one in result if they overlap.

**Complexity:** Time O(n log n), Space O(n)

## Python
```python
def merge(intervals: list[list[int]]) -> list[list[int]]:
    intervals.sort(key=lambda x: x[0])
    result = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= result[-1][1]:
            result[-1][1] = max(result[-1][1], end)
        else:
            result.append([start, end])
    return result
```

## TypeScript
```typescript
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const result: number[][] = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
        else result.push(intervals[i]);
    }
    return result;
}
```

## Go
```go
func merge(intervals [][]int) [][]int {
    sort.Slice(intervals, func(i, j int) bool { return intervals[i][0] < intervals[j][0] })
    result := [][]int{intervals[0]}
    for i := 1; i < len(intervals); i++ {
        last := result[len(result)-1]
        if intervals[i][0] <= last[1] {
            if intervals[i][1] > last[1] { last[1] = intervals[i][1] }
        } else {
            result = append(result, intervals[i])
        }
    }
    return result
}
```
