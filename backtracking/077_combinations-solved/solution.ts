/*
 * 77. Combinations
 * https://leetcode.com/problems/combinations/
 *
 * Given two integers n and k, return all possible combinations
 * of k numbers chosen from the range [1, n].
 *
 * Example:
 *     Input: n = 4, k = 2
 *     Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 *
 * Constraints:
 *     1 <= n <= 20
 *     1 <= k <= n
 */

function combine(n: number, k: number): number[][] {
    const res: number[][] = []

    function dfs(start: number, temp: number[]) {
        if (temp.length === k) {
            res.push([...temp])
        } else {
            for (let i = start; i <= n; i++) {
                temp.push(i)
                dfs(i + 1, temp)
                temp.pop()
            }
        }
    }

    dfs(1, [])
    return res
};
