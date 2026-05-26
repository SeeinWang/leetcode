# 1272 · Remove Interval (LeetCode Premium)

Given a sorted list of disjoint `intervals`, each `intervals[i] = [a_i, b_i]` represents the interval `[a_i, b_i)`. We also have a `toBeRemoved` interval `[start, end)`. Return a sorted list of intervals after removing `toBeRemoved` from `intervals`.

## Example
- Input: `intervals = [[0,2],[3,4],[5,7]]`, `toBeRemoved = [1,6]` → `[[0,1],[6,7]]`
- Input: `intervals = [[0,5]]`, `toBeRemoved = [2,3]` → `[[0,2],[3,5]]`
- Input: `intervals = [[-5,-4],[-3,-2],[1,2],[3,5],[8,9]]`, `toBeRemoved = [-1,4]` → `[[-5,-4],[-3,-2],[4,5],[8,9]]`

## 思路
- 对每个区间 `[a, b)` 与 `[start, end)` 求差集，输出剩余部分
- 完全不相交：原样保留
- 完全被覆盖：丢弃
- 部分相交：可能产生左半 `[a, start)` 和 / 或右半 `[end, b)`
