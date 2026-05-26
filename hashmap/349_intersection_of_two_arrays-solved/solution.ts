/*
 * 349. Intersection of Two Arrays
 * https://leetcode.com/problems/intersection-of-two-arrays/
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique.
 *
 * Example 1:
 *     Input: nums1 = [1,2,2,1], nums2 = [2,2]
 *     Output: [2]
 *
 * Example 2:
 *     Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *     Output: [9,4]
 *
 * Constraints:
 *     1 <= nums1.length, nums2.length <= 1000
 *     0 <= nums1[i], nums2[i] <= 1000
 */

function intersection(nums1: number[], nums2: number[]): number[] {
    /* const setOne = new Set(nums1)
    const setTwo = new Set(nums2)
    const result = [];
    for(const num of Array.from(setOne)) {
        if(setTwo.has(num)){
            result.push(num)
        }
    }
    return result */
    return [...new Set(nums1)].filter(n => new Set(nums2).has(n))
};
