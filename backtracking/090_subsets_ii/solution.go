/*
90. Subsets II
https://leetcode.com/problems/subsets-ii/

Sort first, then backtrack. Skip duplicates at the same recursion depth.
*/

import "sort"

func subsetsWithDup(nums []int) [][]int {
	sort.Ints(nums)
	result := [][]int{}
	var backtrack func(start int, current []int)
	backtrack = func(start int, current []int) {
		tmp := make([]int, len(current))
		copy(tmp, current)
		result = append(result, tmp)
		for i := start; i < len(nums); i++ {
			if i > start && nums[i] == nums[i-1] {
				continue
			}
			backtrack(i+1, append(current, nums[i]))
		}
	}
	backtrack(0, []int{})
	return result
}
