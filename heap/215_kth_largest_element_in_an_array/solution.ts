/*
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * Return the kth largest element.
 *
 * Example 1: nums=[3,2,1,5,6,4], k=2 → 5
 * Constraints: 1 <= k <= nums.length <= 10^5
 */

function findKthLargest(nums: number[], k: number): number {
    function partition(left: number, right: number): number {
        const r = left + Math.floor(Math.random() * (right - left + 1));
        [nums[r], nums[right]] = [nums[right], nums[r]];
        const pivot = nums[right];
        let wall = left;
        for (let i = left; i < right; i++) {
            if (nums[i] < pivot) {
                [nums[i], nums[wall]] = [nums[wall], nums[i]]
                wall++
            }
        }
        [nums[wall], nums[right]] = [nums[right], nums[wall]]
        return wall
    }
    function divide(left: number, right: number): void {
        if (left >= right) return;
        let position = partition(left, right)
        if (position === nums.length - k) return;
        else if (position < nums.length - k) divide(position + 1, right)
        else divide(left, position - 1)
    }

    divide(0, nums.length - 1)
    return nums[nums.length - k]
};
