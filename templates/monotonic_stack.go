/*
Monotonic Stack Template

A stack kept in monotonic order (increasing or decreasing). When the incoming
element breaks the order, you pop — and each pop resolves an answer for the
popped element (its "next greater / next smaller" neighbor). Store indices when
you need distances or widths; store values when you only need the neighbor.

Decreasing stack -> finds the NEXT GREATER element.
Increasing stack -> finds the NEXT SMALLER element.

Use cases:
- Next greater element (LeetCode 496, 503)
- Daily temperatures (LeetCode 739)
- Largest rectangle in histogram (LeetCode 84)
- Trapping rain water (LeetCode 42)
*/
package main

import "fmt"

// nextGreaterElements returns, for each element, the next strictly greater
// element to its right, or -1 if none. Decreasing stack of indices.
func nextGreaterElements(nums []int) []int {
	n := len(nums)
	res := make([]int, n)
	for i := range res {
		res[i] = -1
	}
	stack := []int{} // indices, values decreasing
	for i, num := range nums {
		for len(stack) > 0 && nums[stack[len(stack)-1]] < num {
			res[stack[len(stack)-1]] = num
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, i)
	}
	return res
}

func main() {
	fmt.Println(nextGreaterElements([]int{2, 1, 2, 4, 3})) // [4 2 4 -1 -1]
}
