# Monotonic Queue / 单调队列
# 用 deque 存「下标」，维护队列里对应的值单调（递增或递减）。
# 核心两步：进新元素前从队尾弹掉被它支配的旧元素 → 保单调；
#          需要答案时从队首取/弹。每个下标进出各一次 → 总 O(n)。
#
# 两大套路：
#   1) 定长窗口最值（239）：维护递减队列，队首即窗口最大值；超窗口的从队首弹。
#   2) 前缀和 + 单调队列（862）：维护 P[dq] 递增，队首找最短/最优区间。
#
# 用法见下面两个示例函数。

from collections import deque
from typing import List


# 套路 1：定长滑动窗口最大值（239）
# 递减队列：队首始终是当前窗口最大值的下标。
def sliding_window_max(nums: List[int], k: int) -> List[int]:
    dq = deque()  # stores indices, nums[dq] decreasing
    res = []
    for i, x in enumerate(nums):
        # 队首：弹掉滑出窗口的下标
        if dq and dq[0] <= i - k:
            dq.popleft()
        # 队尾：弹掉比当前小的（被支配）
        while dq and nums[dq[-1]] < x:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            res.append(nums[dq[0]])
    return res


# 套路 2：前缀和 + 单调队列，求和 >= k 的最短子数组（862，含负数）
# 递增队列：P[dq] 单调递增；队首找答案后直接弹掉（对未来只会更长）。
def shortest_subarray_at_least_k(nums: List[int], k: int) -> int:
    n = len(nums)
    P = [0] * (n + 1)
    for i in range(n):
        P[i + 1] = P[i] + nums[i]

    res = float("inf")
    dq = deque()  # stores indices, P[dq] increasing
    for j in range(n + 1):
        while dq and P[j] - P[dq[0]] >= k:        # 队首：找答案
            res = min(res, j - dq.popleft())
        while dq and P[dq[-1]] >= P[j]:           # 队尾：保单调
            dq.pop()
        dq.append(j)
    return res if res != float("inf") else -1
