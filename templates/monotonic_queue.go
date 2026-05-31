// Monotonic Queue / 单调队列
// 用 slice 存「下标」，维护队列里对应的值单调（递增或递减）。
// 核心两步：进新元素前从队尾弹掉被它支配的旧元素 → 保单调；
//          需要答案时从队首取/弹。每个下标进出各一次 → 总 O(n)。
//
// 两大套路：
//   1) 定长窗口最值（239）：维护递减队列，队首即窗口最大值；超窗口的从队首弹。
//   2) 前缀和 + 单调队列（862）：维护 P[dq] 递增，队首找最短/最优区间。
//
// 注意：dq = dq[1:] 不会立即释放底层数组，长跑可能占内存，必要时复制。

package templates

import "math"

// 套路 1：定长滑动窗口最大值（239）
// 递减队列：队首始终是当前窗口最大值的下标。
func slidingWindowMax(nums []int, k int) []int {
	dq := []int{} // indices, nums[dq] decreasing
	res := []int{}
	for i, x := range nums {
		if len(dq) > 0 && dq[0] <= i-k { // 队首：滑出窗口
			dq = dq[1:]
		}
		for len(dq) > 0 && nums[dq[len(dq)-1]] < x { // 队尾：保单调
			dq = dq[:len(dq)-1]
		}
		dq = append(dq, i)
		if i >= k-1 {
			res = append(res, nums[dq[0]])
		}
	}
	return res
}

// 套路 2：前缀和 + 单调队列，求和 >= k 的最短子数组（862，含负数）
// 递增队列：P[dq] 单调递增；队首找答案后直接弹掉（对未来只会更长）。
func shortestSubarrayAtLeastK(nums []int, k int) int {
	n := len(nums)
	P := make([]int, n+1)
	for i := 0; i < n; i++ {
		P[i+1] = P[i] + nums[i]
	}

	res := math.MaxInt32
	dq := []int{} // indices, P[dq] increasing
	for j := 0; j <= n; j++ {
		for len(dq) > 0 && P[j]-P[dq[0]] >= k { // 队首：找答案
			if j-dq[0] < res {
				res = j - dq[0]
			}
			dq = dq[1:]
		}
		for len(dq) > 0 && P[dq[len(dq)-1]] >= P[j] { // 队尾：保单调
			dq = dq[:len(dq)-1]
		}
		dq = append(dq, j)
	}

	if res == math.MaxInt32 {
		return -1
	}
	return res
}
