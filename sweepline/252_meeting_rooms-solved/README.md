# 252 · Meeting Rooms

Given an array of meeting time intervals `intervals[i] = [start_i, end_i]`, determine if a person could attend all meetings.

## Example
- Input: `[[0,30],[5,10],[15,20]]` → `false`
- Input: `[[7,10],[2,4]]` → `true`

## 思路（扫描线）
- 拆事件：开始 `+1`、结束 `-1`
- 按时间排序，同一时刻 `-1` 优先（结束瞬间允许下一场开始）
- 扫描时若 `count > 1` 就说明有重叠，返回 `false`
