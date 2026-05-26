# 621. Task Scheduler

Math: slots = (maxCount-1)*(n+1) + numMax. Answer = max(len(tasks), slots).

**Complexity:** Time O(n), Space O(1)

## Python
```python
from collections import Counter

def leastInterval(tasks: list[str], n: int) -> int:
    counts = Counter(tasks)
    max_count = max(counts.values())
    num_max = sum(1 for c in counts.values() if c == max_count)
    return max(len(tasks), (max_count - 1) * (n + 1) + num_max)
```

## TypeScript
```typescript
function leastInterval(tasks: string[], n: number): number {
    const counts = new Array(26).fill(0);
    for (const t of tasks) counts[t.charCodeAt(0) - 65]++;
    const maxCount = Math.max(...counts);
    const numMax = counts.filter(c => c === maxCount).length;
    return Math.max(tasks.length, (maxCount - 1) * (n + 1) + numMax);
}
```

## Go
```go
func leastInterval(tasks []byte, n int) int {
    counts := [26]int{}
    for _, t := range tasks { counts[t-'A']++ }
    maxCount := 0
    for _, c := range counts { if c > maxCount { maxCount = c } }
    numMax := 0
    for _, c := range counts { if c == maxCount { numMax++ } }
    result := (maxCount-1)*(n+1) + numMax
    if len(tasks) > result { return len(tasks) }
    return result
}
```
