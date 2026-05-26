# LintCode 391 · Number of Airplanes in the Sky

Given a list of time intervals representing airplane takeoff/landing times, return the maximum number of airplanes in the sky at the same time.

## Example
Input: `[(1, 10), (2, 3), (5, 8), (4, 7)]`
Output: `3`

## 思路（扫描线）
- 把每个 interval 拆成两个事件：起飞 `+1`、降落 `-1`
- 按时间排序，遇到相同时间时**降落优先**（题目约定降落瞬间不算在天上）
- 扫描累加，记录最大值
