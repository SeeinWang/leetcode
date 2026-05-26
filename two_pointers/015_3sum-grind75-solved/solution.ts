/*
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.
 * The solution set must not contain duplicate triplets.
 *
 * Example 1:
 *     Input: nums = [-1,0,1,2,-1,-4]
 *     Output: [[-1,-1,2],[-1,0,1]]
 *
 * Constraints:
 *     3 <= nums.length <= 3000
 *     -10^5 <= nums[i] <= 10^5
 */

function threeSum(nums: number[]): number[][] {
    const result: number[][] = []
    const sorted = nums.sort((a, b) => a - b)
    let i = 0;
    for (; i < sorted.length - 2; i++) {
        if (sorted[i] > 0) break;
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        let left = i + 1;
        let right = sorted.length - 1;
        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];
            if (sum === 0) {
                result.push([sorted[i], sorted[left], sorted[right]])
                left++;
                right--;
                while (sorted[left] === sorted[left - 1] && left < right) {
                    left++
                }
                while (sorted[right] === sorted[right + 1] && left < right) {
                    right--
                }
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }

    }
    return result
};
