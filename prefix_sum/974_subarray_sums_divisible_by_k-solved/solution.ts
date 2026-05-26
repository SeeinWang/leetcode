/*
 * 974. Subarray Sums Divisible by K
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/
 *
 * Given an integer array nums and an integer k, return the number of non-empty
 * subarrays that have a sum divisible by k.
 * A subarray is a contiguous part of an array.
 *
 * Example 1: nums=[4,5,0,-2,-3,1], k=5 → 7
 * Example 2: nums=[5], k=9 → 0
 */

function subarraysDivByK(nums: number[], k: number): number {
    const prefix = new Map()
    prefix.set(0, 1)
    let rest = 0
    let res = 0

    for (const num of nums) {
        rest = (rest + num % k + k) % k
        if (prefix.has(rest)) {
            res += prefix.get(rest)
        }
        prefix.set(rest, (prefix.get(rest) || 0) + 1)
    }
    return res;
};
