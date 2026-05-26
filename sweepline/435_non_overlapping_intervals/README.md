# 435 · Non-overlapping Intervals

Given an array of intervals `intervals` where `intervals[i] = [start_i, end_i]`, return the **minimum number of intervals** you need to remove to make the rest of the intervals non-overlapping.

> Intervals that touch at a single point (e.g. `[1,2]` and `[2,3]`) are **not** considered overlapping.

## Example
- Input: `intervals = [[1,2],[2,3],[3,4],[1,3]]` → `1`  （移除 `[1,3]`）
- Input: `intervals = [[1,2],[1,2],[1,2]]` → `2`
- Input: `intervals = [[1,2],[2,3]]` → `0`

## Constraints
- `1 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `-5 * 10^4 <= start_i < end_i <= 5 * 10^4`

## 思路（贪心：按 end 排序）
- 按 `end` 升序排序，遍历时维护「上一个保留区间的 end」
- 当前区间 `start >= prevEnd` → 不重叠，保留并更新 `prevEnd`
- 否则 → 重叠，必须删除当前区间（计数 +1），`prevEnd` 不变（因为当前 end 更大或相等，留小的更优）
- 时间 `O(n log n)`，空间 `O(1)`

> 为什么按 `end` 排序：每次选 end 最小的留下，能给后面留出最多空间，类似 activity selection。
