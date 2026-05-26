/*
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than floor(n / 2) times. You may
 * assume that the majority element always exists in the array.
 *
 * Example 1:
 *     Input: nums = [3,2,3]
 *     Output: 3
 *
 * Example 2:
 *     Input: nums = [2,2,1,1,1,2,2]
 *     Output: 2
 *
 * Constraints:
 *     - n == nums.length
 *     - 1 <= n <= 5 * 10^4
 *     - -10^9 <= nums[i] <= 10^9
 *     - The input is generated such that a majority element will exist in the array.
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

function majorityElement(nums: number[]): number {
    let candidate = nums[0]
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
            count = 1
        } else if (nums[i] === candidate) {
            count++
        } else {
            count--
        }
    }

    return candidate;

};
