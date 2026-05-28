/*
 * 47. Permutations II
 * https://leetcode.com/problems/permutations-ii/
 *
 * Given a collection of numbers that may contain duplicates,
 * return all possible unique permutations in any order.
 *
 * Example:
 *     Input: nums = [1,1,2]
 *     Output: [[1,1,2],[1,2,1],[2,1,1]]
 *
 * Constraints:
 *     1 <= nums.length <= 8
 *     -10 <= nums[i] <= 10
 */

function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = []
    const used: boolean[] = new Array(nums.length).fill(false)
    const path: number[] = []

    function dfs() {
        if (path.length === nums.length) {
            res.push([...path])
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (used[i] || i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
                path.push(nums[i])
                used[i] = true
                dfs()
                path.pop()
                used[i] = false
            }
        }
    }
    dfs()
    return res
};
