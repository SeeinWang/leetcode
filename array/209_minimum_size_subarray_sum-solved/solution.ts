/*
 * 209. Minimum Size Subarray Sum
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 *
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a subarray whose sum is greater than or equal
 * to target. If there is no such subarray, return 0 instead.
 *
 * Example 1:
 *     Input: target = 7, nums = [2,3,1,2,4,3]
 *     Output: 2
 *
 * Example 2:
 *     Input: target = 4, nums = [1,4,4]
 *     Output: 1
 *
 * Constraints:
 *     1 <= target <= 10^9
 *     1 <= nums.length <= 10^5
 *     1 <= nums[i] <= 10^4
 */

function minSubArrayLen(target: number, nums: number[]): number {
    let min = nums.length + 1;
    let left = 0;
    let right = 0;
    let sum = 0;
    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target && left <= right) {
            min = Math.min(min, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return min < nums.length + 1 ? min : 0;
};
