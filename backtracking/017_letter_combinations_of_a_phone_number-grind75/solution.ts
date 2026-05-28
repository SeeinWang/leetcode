/*
 * 17. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Given a string containing digits 2-9, return all possible letter combinations.
 *
 * Example:
 *     Input: digits = "23"
 *     Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Constraints:
 *     0 <= digits.length <= 4
 *     digits[i] is a digit in range ['2', '9']
 */

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const map: Record<string, string> = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const res: string[] = [];
    const path: string[] = [];

    const backtrack = (i: number): void => {
        if (i === digits.length) {
            res.push(path.join(''));
            return;
        }
        for (const ch of map[digits[i]]) {
            path.push(ch);
            backtrack(i + 1);
            path.pop();
        }
    };

    backtrack(0);
    return res;
};
