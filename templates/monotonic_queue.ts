// Monotonic Queue / 单调队列
// 用数组存「下标」，维护队列里对应的值单调（递增或递减）。
// 核心两步：进新元素前从队尾弹掉被它支配的旧元素 → 保单调；
//          需要答案时从队首取/弹。每个下标进出各一次 → 总 O(n)。
//
// 两大套路：
//   1) 定长窗口最值（239）：维护递减队列，队首即窗口最大值；超窗口的从队首弹。
//   2) 前缀和 + 单调队列（862）：维护 P[dq] 递增，队首找最短/最优区间。
//
// 注意：TS 没有 O(1) deque，dq.shift() 是 O(n)。数据大时用 head 指针模拟
//       （let head = 0; ... dq[head++]）保证严格 O(n)。下面为可读起见用 shift()。

// 套路 1：定长滑动窗口最大值（239）
// 递减队列：队首始终是当前窗口最大值的下标。
function slidingWindowMax(nums: number[], k: number): number[] {
    const dq: number[] = []; // indices, nums[dq] decreasing
    const res: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (dq.length && dq[0] <= i - k) dq.shift();              // 队首：滑出窗口
        while (dq.length && nums[dq[dq.length - 1]] < nums[i]) dq.pop(); // 队尾：保单调
        dq.push(i);
        if (i >= k - 1) res.push(nums[dq[0]]);
    }
    return res;
}

// 套路 2：前缀和 + 单调队列，求和 >= k 的最短子数组（862，含负数）
// 递增队列：P[dq] 单调递增；队首找答案后直接弹掉（对未来只会更长）。
function shortestSubarrayAtLeastK(nums: number[], k: number): number {
    const n = nums.length;
    const P = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) P[i + 1] = P[i] + nums[i];

    let res = Infinity;
    const dq: number[] = []; // indices, P[dq] increasing
    for (let j = 0; j <= n; j++) {
        while (dq.length && P[j] - P[dq[0]] >= k) res = Math.min(res, j - dq.shift()!); // 队首：找答案
        while (dq.length && P[dq[dq.length - 1]] >= P[j]) dq.pop();                     // 队尾：保单调
        dq.push(j);
    }
    return res === Infinity ? -1 : res;
}

export { slidingWindowMax, shortestSubarrayAtLeastK };
