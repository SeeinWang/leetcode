/*
 * 39. Combination Sum
 * https://leetcode.com/problems/combination-sum/
 *
 * Given an array of distinct integers candidates and a target integer, return a
 * list of all unique combinations of candidates where the chosen numbers sum to target.
 * The same number may be chosen from candidates an unlimited number of times.
 *
 * Example:
 *     Input: candidates = [2,3,6,7], target = 7
 *     Output: [[2,2,3],[7]]
 *
 * Constraints:
 *     1 <= candidates.length <= 30
 *     1 <= target <= 400
 */

function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    candidates.sort((a, b) => a - b)

    function dfs(start: number, curSum: number, path: number[]) {
        if (curSum === target) {
            res.push([...path])
        } else {
            for (let i = start; i < candidates.length; i++) {
                if (curSum + candidates[i] > target) break
                path.push(candidates[i])
                dfs(i, curSum + candidates[i], path)
                path.pop()
            }
        }
    }
    dfs(0, 0, [])

    return res;
};
