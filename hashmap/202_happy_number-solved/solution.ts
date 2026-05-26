/*
 * 202. Happy Number
 * https://leetcode.com/problems/happy-number/
 *
 * Write an algorithm to determine if a number n is happy.
 * A happy number is defined by the following process:
 * - Starting with any positive integer, replace the number by the sum of the
 *   squares of its digits.
 * - Repeat the process until the number equals 1 (happy) or loops endlessly
 *   in a cycle (not happy).
 *
 * Example 1:
 *     Input: n = 19
 *     Output: true
 *
 * Constraints:
 *     1 <= n <= 2^31 - 1
 */

function sumOfSquares(n: number): number {
    let sum = 0
    while (n > 0) {
        const digit = n % 10
        sum += digit * digit
        n = Math.floor(n / 10)
    }
    return sum;
}


function isHappy(n: number): boolean {
    const numberSet = new Set()
    let current = n;
    while (current !== 1 && !numberSet.has(n)) {
        numberSet.add(current)
        current = sumOfSquares(current)
    }
    return current === 1

};
