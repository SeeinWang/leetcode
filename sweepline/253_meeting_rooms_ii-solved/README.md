# 253 · Meeting Rooms II

Given an array of meeting time intervals `intervals[i] = [start_i, end_i]`, return the minimum number of conference rooms required.

## Example
- Input: `[[0,30],[5,10],[15,20]]` → `2`
- Input: `[[7,10],[2,4]]` → `1`

## 思路（扫描线）
- 拆事件：开始 `+1`、结束 `-1`
- 按时间排序，同一时刻 `-1` 优先（前一场结束的瞬间，房间可以让给下一场）
- 扫描时维护 `count`，取过程中的最大值即所需房间数
