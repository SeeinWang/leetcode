/*
 * 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/
 *
 * Given an array of integers nums and an integer k, return the total number of
 * subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Example 1: nums=[1,1,1], k=2 → 2
 * Example 2: nums=[1,2,3], k=3 → 2
 */

function subarraySum(nums: number[], k: number): number {
    let sum = 0;
    const sumMap = new Map<number, number>();
    sumMap.set(0, 1) // prefix sum 和frequency
    let res = 0

    for (const num of nums) {
        sum += num;
        if (sumMap.has(sum - k)) {
            res += sumMap.get(sum - k)!
        }
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1)
    }
    return res;
};
