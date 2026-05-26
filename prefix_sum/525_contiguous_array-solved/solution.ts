/*
 * 525. Contiguous Array
 * https://leetcode.com/problems/contiguous-array/
 *
 * Given a binary array nums, return the maximum length of a contiguous
 * subarray with an equal number of 0 and 1.
 *
 * Example 1: nums=[0,1] → 2
 * Example 2: nums=[0,1,0] → 2
 */

function findMaxLength(nums: number[]): number {
    let sum = 0
    const sumMap = new Map()
    let maxLen = 0
    sumMap.set(0, -1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : nums[i]
        if (sumMap.has(sum)) {
            maxLen = Math.max(maxLen, i - sumMap.get(sum))
        } else {
            sumMap.set(sum, i)
        }
    }
    return maxLen
};
