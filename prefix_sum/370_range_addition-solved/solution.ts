/*
 * 370. Range Addition (LeetCode Premium)
 * https://leetcode.com/problems/range-addition/
 *
 * Apply each update [start, end, inc] to a length-`length` zero array
 * (incrementing arr[start..end] by inc). Return the final array.
 *
 * Example: length=5, updates=[[1,3,2],[2,4,3],[0,2,-2]] → [-2,0,3,5,3]
 */

// 因为差分数组的前缀和就是原数组——每个位置累加所有"在它之前开始、还没结束"的增量，正好等于该位置被覆盖的所有区间增量之和。

function getModifiedArray(length: number, updates: number[][]): number[] {
    const res = new Array(length).fill(0)
    for (const update of updates) {
        const [start, end, value] = [update[0], update[1], update[2]]
        const stop = end + 1
        res[start] += value
        if (stop < length) {
            res[stop] -= value
        }
    }
    let sum = 0
    for (let i = 0; i < length; i++) {
        sum += res[i]
        res[i] = sum
    }

    return res;

};
