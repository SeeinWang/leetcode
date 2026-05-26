/*
 * 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence. You must write an algorithm that runs in O(n) time.
 *
 * Example 1: nums=[100,4,200,1,3,2] → 4
 */

function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)
    let maxLen = 0;
    for (const num of set) {
        if (!set.has(num - 1)) {
            let cur = num;
            let len = 1;
            while (set.has(cur + 1)) {
                cur++;
                len++
            }
            maxLen = Math.max(maxLen, len)
        }
    }
    return maxLen
};
