/*
 * 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Given n pairs of parentheses, generate all combinations of well-formed parentheses.
 *
 * Example:
 *     Input: n = 3
 *     Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Constraints:
 *     1 <= n <= 8
 */

function generateParenthesis(n: number): string[] {
    const res: string[] = []
    const path: string[] = []

    function backtrack(open: number, close: number) {
        if (path.length === n * 2) {
            res.push(path.join(''))
        }
        if (open < n) {
            path.push('(')
            backtrack(open + 1, close)
            path.pop()
        }
        if (close < open) {
            path.push(')')
            backtrack(open, close + 1)
            path.pop()
        }
    }

    backtrack(0, 0)
    return res
};
