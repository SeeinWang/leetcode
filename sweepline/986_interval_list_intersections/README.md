# 986 · Interval List Intersections

给定两个**已按起点升序排好**、各自内部不相交的闭区间列表 `firstList`、`secondList`，返回它们的交集列表。

## Example
- `firstList = [[0,2],[5,10],[13,23],[24,25]]`, `secondList = [[1,5],[8,12],[15,24],[25,26]]`
  → `[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]`
- `firstList = [[1,3],[5,9]]`, `secondList = []` → `[]`

## Constraints
- `0 <= firstList.length, secondList.length <= 1000`
- `firstList.length + secondList.length >= 1`
- 同列表内区间不相交且按起点升序
- `0 <= start < end <= 10^9`

## 思路（双指针）
- `i, j` 分别指向两个列表，对当前 `A = firstList[i]`、`B = secondList[j]`：
  - 交集 `lo = max(A[0], B[0])`，`hi = min(A[1], B[1])`
  - 若 `lo <= hi` → 加入结果 `[lo, hi]`
- 谁的 `end` 小，谁就推进指针（它不可能再与后面的区间产生交集）
- 时间 `O(n + m)`，空间 `O(1)`（不计输出）

> 注意是**闭区间**，所以判断用 `lo <= hi`（端点重合也算交集，如 `[5,5]`）。
