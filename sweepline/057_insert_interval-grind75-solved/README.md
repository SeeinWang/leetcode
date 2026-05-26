# 57. Insert Interval

Three phases: add all intervals ending before new interval, merge all overlapping, add remaining.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
    result = []
    i = 0
    n = len(intervals)
    # Add all intervals before newInterval
    while i < n and intervals[i][1] < newInterval[0]:
        result.append(intervals[i])
        i += 1
    # Merge overlapping
    while i < n and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1
    result.append(newInterval)
    # Add remaining
    result.extend(intervals[i:])
    return result
```

## TypeScript
```typescript
function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0])
        result.push(intervals[i++]);
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    while (i < intervals.length) result.push(intervals[i++]);
    return result;
}
```

## Go
```go
func insert(intervals [][]int, newInterval []int) [][]int {
    result := [][]int{}
    i := 0
    for i < len(intervals) && intervals[i][1] < newInterval[0] {
        result = append(result, intervals[i]); i++
    }
    for i < len(intervals) && intervals[i][0] <= newInterval[1] {
        if intervals[i][0] < newInterval[0] { newInterval[0] = intervals[i][0] }
        if intervals[i][1] > newInterval[1] { newInterval[1] = intervals[i][1] }
        i++
    }
    result = append(result, newInterval)
    return append(result, intervals[i:]...)
}
```
