# 370. Range Addition

**Difference array (差分数组)** —— 前缀和的逆操作。把每次 O(n) 的区间加变成 O(1)，最后一次前缀和还原。

## 核心思路

对每个 `[start, end, inc]`：
- `diff[start] += inc`
- `diff[end + 1] -= inc`（如果 `end+1 < length`）

最后对 `diff` 做一次前缀和扫描，得到最终数组。

**直觉**：`diff[i]` 记录的是"在位置 i 处，相对前一位的增量"。`+inc` 在 start 表示从这里开始多加 inc，`-inc` 在 end+1 表示从这里开始撤销 inc。前缀和把这些"开始/结束信号"累积成实际值。

**Complexity:** Time O(n + k)（k = updates 数量），Space O(n)
对比朴素做法 O(n·k)，差分把每次 update 从 O(end-start) 降到 O(1)。

## Python
```python
def getModifiedArray(length: int, updates: list[list[int]]) -> list[int]:
    diff = [0] * length
    for start, end, inc in updates:
        diff[start] += inc
        if end + 1 < length:
            diff[end + 1] -= inc
    # prefix sum in place
    for i in range(1, length):
        diff[i] += diff[i - 1]
    return diff
```

## TypeScript
```typescript
function getModifiedArray(length: number, updates: number[][]): number[] {
    const diff = new Array(length).fill(0);
    for (const [start, end, inc] of updates) {
        diff[start] += inc;
        if (end + 1 < length) diff[end + 1] -= inc;
    }
    for (let i = 1; i < length; i++) diff[i] += diff[i - 1];
    return diff;
}
```

## Go
```go
func getModifiedArray(length int, updates [][]int) []int {
    diff := make([]int, length)
    for _, u := range updates {
        start, end, inc := u[0], u[1], u[2]
        diff[start] += inc
        if end+1 < length {
            diff[end+1] -= inc
        }
    }
    for i := 1; i < length; i++ {
        diff[i] += diff[i-1]
    }
    return diff
}
```

## 走一遍例子

`length=5, updates=[[1,3,2],[2,4,3],[0,2,-2]]`

应用三次 update 后的 diff：
| | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| init | 0 | 0 | 0 | 0 | 0 |
| [1,3,+2] | 0 | +2 | 0 | 0 | -2 |
| [2,4,+3] | 0 | +2 | +3 | 0 | -2 |
| [0,2,-2] | -2 | +2 | +3 | +2 | -2 |

前缀和扫一遍：`[-2, 0, 3, 5, 3]` ✓

## 套路对照：前缀和 vs 差分

| | 前缀和 | 差分 |
|---|---|---|
| 解决什么 | 区间求和 | 区间加 |
| 单点 → 区间 | O(1) 查询 | — |
| 区间 → 单点 | — | O(1) 更新 |
| 关系 | 互为逆操作 | 互为逆操作 |

> **看到"多次区间加，最后查整个数组"立刻想差分；看到"多次查区间和"立刻想前缀和。**

## 同套路的题
- **1109. Corporate Flight Bookings** —— 几乎是 370 的换皮
- **1094. Car Pooling** —— 差分 + 扫描线
- **2848. Points That Intersect With Cars** —— 同套路计数版
