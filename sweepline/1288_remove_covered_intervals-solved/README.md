# 1288 · Remove Covered Intervals

Given an array `intervals` where `intervals[i] = [l_i, r_i]` represents the interval `[l_i, r_i)`, remove all intervals **covered** by another interval in the list. Return the number of remaining intervals.

> `[a, b)` is covered by `[c, d)` iff `c <= a` and `b <= d`.

## Example
- Input: `intervals = [[1,4],[3,6],[2,8]]` → `2`  （`[3,6]` 被 `[2,8]` 覆盖）
- Input: `intervals = [[1,4],[2,3]]` → `1`

## Constraints
- `1 <= intervals.length <= 1000`
- `intervals[i].length == 2`
- `0 <= l_i < r_i <= 10^5`
- 所有区间互不相同

## 思路（排序 + 一次扫描）
- 按 `start` 升序排序；若 `start` 相同，则按 `end` **降序**（让"大区间"排在前面，避免它被同起点的小区间误判为覆盖小区间）
- 维护 `prevEnd`，遍历每个区间 `[s, e]`：
  - 若 `e <= prevEnd` → 当前被前面某个区间覆盖，丢弃
  - 否则 → 保留，更新 `prevEnd = e`
- 答案 = 保留数；时间 `O(n log n)`，空间 `O(1)`

> 为什么 start 相同时要 end 降序：例如 `[[1,4],[1,10]]`，若按 end 升序会先看 `[1,4]` 设 `prevEnd=4`，再看 `[1,10]` 因 `10>4` 误判为"未被覆盖"，结果保留 2 个；正确答案是 1。
