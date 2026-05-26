# 1235. Maximum Profit in Job Scheduling

Sort by end time, dp[i] = max profit using jobs with end ≤ time[i]; binary search for latest non-overlapping job.

**Complexity:** Time O(n log n), Space O(n)

## Python
```python
def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
    jobs = sorted(zip(endTime, startTime, profit))
    # dp[i] = max profit considering first i jobs (sorted by end time)
    dp = [0] * (len(jobs) + 1)
    for i, (end, start, p) in enumerate(jobs):
        # binary search: find latest job j where jobs[j].end <= start
        lo, hi = 0, i
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if jobs[mid - 1][0] <= start:
                lo = mid
            else:
                hi = mid - 1
        dp[i + 1] = max(dp[i], dp[lo] + p)
    return dp[len(jobs)]
```

## TypeScript
```typescript
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const n = startTime.length;
    const jobs = Array.from({length: n}, (_, i) => [endTime[i], startTime[i], profit[i]]);
    jobs.sort((a, b) => a[0] - b[0]);
    const dp = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        const [end, start, p] = jobs[i];
        // binary search for latest job with end <= start
        let lo = 0, hi = i;
        while (lo < hi) {
            const mid = (lo + hi + 1) >> 1;
            if (jobs[mid - 1][0] <= start) lo = mid;
            else hi = mid - 1;
        }
        dp[i + 1] = Math.max(dp[i], dp[lo] + p);
    }
    return dp[n];
}
```

## Go
```go
func jobScheduling(startTime []int, endTime []int, profit []int) int {
    n := len(startTime)
    type job struct{ end, start, profit int }
    jobs := make([]job, n)
    for i := range jobs { jobs[i] = job{endTime[i], startTime[i], profit[i]} }
    sort.Slice(jobs, func(i, j int) bool { return jobs[i].end < jobs[j].end })
    dp := make([]int, n+1)
    for i, j := range jobs {
        // binary search: largest index lo where jobs[lo-1].end <= j.start
        lo, hi := 0, i
        for lo < hi {
            mid := (lo + hi + 1) / 2
            if jobs[mid-1].end <= j.start { lo = mid } else { hi = mid - 1 }
        }
        if dp[lo]+j.profit > dp[i] { dp[i+1] = dp[lo] + j.profit } else { dp[i+1] = dp[i] }
    }
    return dp[n]
}
```
