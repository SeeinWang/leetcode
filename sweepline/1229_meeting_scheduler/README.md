# 1229 · Meeting Scheduler

给定两个人的空闲时间段 `slots1`、`slots2` 以及会议时长 `duration`，返回**最早**能容纳该时长的公共时间段 `[start, start + duration]`。若不存在返回 `[]`。

## Example
- `slots1 = [[10,50],[60,120],[140,210]]`, `slots2 = [[0,15],[60,70]]`, `duration = 8` → `[60,68]`
- 同上但 `duration = 12` → `[]`

## Constraints
- `1 <= slots1.length, slots2.length <= 10^4`
- `slots[i][0] < slots[i][1]`
- `0 <= slots[i][j] <= 10^9`
- `1 <= duration <= 10^6`
- 同一人的时间段互不相交

## 思路（双指针 / 扫描线）
- 两个数组各自按 `start` 升序排序
- 双指针 `i, j` 同时扫描，对当前 `slots1[i]` 与 `slots2[j]` 求交集 `[max(s1, s2), min(e1, e2)]`
- 若交集长度 `>= duration` → 返回 `[max(s1, s2), max(s1, s2) + duration]`
- 否则推进 `end` 较小的那个指针（它已经不可能再贡献更晚的交集）
- 时间 `O(n log n + m log m)`，空间 `O(1)`

> 也可用最小堆：把两人长度 `>= duration` 的 slot 一起塞进堆，按 start 弹出，连续两个属于不同人且交集足够即可。双指针更直观。
