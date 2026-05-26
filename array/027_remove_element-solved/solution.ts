/*
 * 27. Remove Element
 * https://leetcode.com/problems/remove-element/
 *
 * Given an integer array nums and an integer val, remove all occurrences of
 * val in nums in-place. Return the number of elements not equal to val.
 *
 * Example 1:
 *     Input: nums = [3,2,2,3], val = 3
 *     Output: 2, nums = [2,2,_,_]
 *
 * Example 2:
 *     Input: nums = [0,1,2,2,3,0,4,2], val = 2
 *     Output: 5, nums = [0,1,4,3,0,_,_,_]
 *
 * Constraints:
 *     0 <= nums.length <= 100
 *     0 <= nums[i] <= 50
 *     0 <= val <= 100
 */

function removeElement(nums: number[], val: number): number {
    // let slow: number = 0;
    // let fast: number = 0;
    // while (fast < nums.length) {
    //     if (nums[fast] !== val) {
    //         nums[slow] = nums[fast];
    //         slow++;
    //     }
    //     fast++;
    // }
    // return slow;
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[slow] = nums[i]
            slow++
        }
    }
    return slow
};
