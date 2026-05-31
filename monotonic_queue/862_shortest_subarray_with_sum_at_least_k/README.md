# 862. Shortest Subarray with Sum at Least K

**前缀和 + 单调队列** —— 209 的进阶版。允许负数后滑动窗口失效，必须用单调队列在前缀和数组上求解。

## 为什么 209 的滑动窗口不行了

209 数组全正 → 前缀和 `P` **严格递增** → `P[j] - P[i]` 关于 i 单调 → 双指针成立（左指针只前进不后退）。

862 允许负数 → `P` **不再单调**。考虑 `[2, -1, 2], K=3`：
- 当 j 走到 2 时窗口和 = 1 < 3，左指针不能动；
- j 走到 3 时窗口和 = 3 ≥ 3，但**最优左端点不是当前左指针**——
- 真正的答案是 `[2,-1,2]` 整段，需要左端点回退到 0。

→ 「左指针单向前进」的滑动窗口前提塌了，必须换工具。

## 核心思路：前缀和上的单调队列

要找 `P[j] - P[i] >= K` 且 `j - i` 最小。维护一个候选 `i` 的双端队列 `dq`，让 `P[dq[*]]` **单调递增**：

每个 j 进来时做两件事：

1. **队首弹出（找答案）**：只要 `P[j] - P[dq[0]] >= K`，就更新答案 `j - dq[0]`，并把队首弹掉。
   *为什么能丢？* 这个左端点已经匹配上了 j，对未来任何 j' > j，长度只会更长，留着没用。

2. **队尾弹出（保单调）**：只要队尾 `i` 满足 `P[i] >= P[j]`，弹掉 i 再 push j。
   *为什么能丢？* 对未来任何 j'：
   - `P[j'] - P[j] >= P[j'] - P[i]`（因为 `P[j] <= P[i]`，差值更大 → 更容易 ≥ K）
   - 而且 j 的下标更靠右（`j' - j < j' - i` → 答案更短）
   - → j 在「值更小、位置更靠右」两个维度都支配 i，i 永远不可能是最优解。

每个下标最多入队、出队各一次 → **总 O(n)**。

**Complexity:** Time O(n), Space O(n)

## Python
```python
from collections import deque

def shortestSubarray(nums: list[int], k: int) -> int:
    n = len(nums)
    P = [0] * (n + 1)
    for i in range(n):
        P[i + 1] = P[i] + nums[i]

    res = float('inf')
    dq = deque()  # stores indices, P[dq[*]] increasing

    for j in range(n + 1):
        # 队首：找答案
        while dq and P[j] - P[dq[0]] >= k:
            res = min(res, j - dq.popleft())
        # 队尾：保单调
        while dq and P[dq[-1]] >= P[j]:
            dq.pop()
        dq.append(j)

    return res if res != float('inf') else -1
```

## TypeScript
```typescript
function shortestSubarray(nums: number[], k: number): number {
    const n = nums.length;
    const P = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) P[i + 1] = P[i] + nums[i];

    let res = Infinity;
    const dq: number[] = [];  // indices, P[dq[*]] increasing

    for (let j = 0; j <= n; j++) {
        while (dq.length && P[j] - P[dq[0]] >= k) {
            res = Math.min(res, j - dq.shift()!);
        }
        while (dq.length && P[dq[dq.length - 1]] >= P[j]) {
            dq.pop();
        }
        dq.push(j);
    }

    return res === Infinity ? -1 : res;
}
```

## Go
```go
func shortestSubarray(nums []int, k int) int {
    n := len(nums)
    P := make([]int, n+1)
    for i := 0; i < n; i++ {
        P[i+1] = P[i] + nums[i]
    }

    res := math.MaxInt32
    dq := []int{} // indices, P[dq[*]] increasing

    for j := 0; j <= n; j++ {
        for len(dq) > 0 && P[j]-P[dq[0]] >= k {
            if j-dq[0] < res {
                res = j - dq[0]
            }
            dq = dq[1:]
        }
        for len(dq) > 0 && P[dq[len(dq)-1]] >= P[j] {
            dq = dq[:len(dq)-1]
        }
        dq = append(dq, j)
    }

    if res == math.MaxInt32 {
        return -1
    }
    return res
}
```

## 走一遍例子

`nums = [2, -1, 2], K = 3`

前缀和 `P = [0, 2, 1, 3]`

| j | P[j] | 队首检查 | 队尾检查 | dq 状态 | res |
|---|---|---|---|---|---|
| 0 | 0 | dq 空 | dq 空 | [0] | ∞ |
| 1 | 2 | 2-0=2 < 3，不弹 | P[0]=0 < 2，不弹 | [0,1] | ∞ |
| 2 | 1 | 1-0=1 < 3，不弹 | P[1]=2 ≥ 1，弹 1 | [0,2] | ∞ |
| 3 | 3 | 3-0=3 ≥ 3，弹 0，res=3 | P[2]=1 < 3，不弹 | [2,3] | **3** |

答案 = 3 ✓

**关键观察**：j=2 时弹掉了 1（因为 `P[1]=2 >= P[2]=1`），这一步保证了 j=3 时队首是 0 而不是 1，从而能找到长度 3 的最优解。如果没有队尾弹出，j=3 时队首仍是 0 也能找到，但**只要存在「P 不单调」的中间下标干扰，剪枝就是必须的**——它防止某个高 P 值的下标永远卡在队首挡住后面的好答案。

## 易错点

1. **前缀和长度是 n+1**，j 要从 0 遍历到 n（不是 n-1）。
2. **两个 while 顺序不能颠倒**：先弹队首找答案，再弹队尾保单调。如果先弹队尾，可能把当前 j 自己干掉。
3. **队首弹出的 `>=` 不能写成 `>`**（题目要求 ≥ K）。
4. **队尾弹出用 `>=`（含等号）**：若 `P[i] == P[j]`，i 在前但下标更小，被 j 支配。
5. JS/TS 用 `dq.shift()` 是 O(n)，严格 O(n) 总复杂度需要用下标模拟（用 `head` 指针）或 Deque 库。LeetCode 上数据规模通常能过。

## 套路对照

| 题号 | 数组性质 | 算法 | 复杂度 |
|---|---|---|---|
| 209 | 全正 | 滑动窗口 | O(n) |
| 862 | 含负 | 前缀和 + 单调队列 | O(n) |
| 209 备选 | 全正 | 前缀和 + 二分 | O(n log n) |

> **「区间和 ≥ K 求最短」+ **含负数** = 前缀和单调队列**。这是一个非常稳定的信号。

## 同套路的题
- **239. Sliding Window Maximum** —— 单调队列入门，先做这题熟悉「弹尾保单调」
- **1696. Jump Game VI** —— 单调队列优化 DP
- **918. Maximum Sum Circular Subarray** —— 前缀和 + 单调队列变体
