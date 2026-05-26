/*
 * 59. Spiral Matrix II
 * https://leetcode.com/problems/spiral-matrix-ii/
 *
 * Given a positive integer n, generate an n x n matrix filled with elements
 * from 1 to n^2 in spiral order.
 *
 * Example 1:
 *     Input: n = 3
 *     Output: [[1,2,3],[8,9,4],[7,6,5]]
 *
 * Example 2:
 *     Input: n = 1
 *     Output: [[1]]
 *
 * Constraints:
 *     1 <= n <= 20
 */

function generateMatrix(n: number): number[][] {
    const result = Array.from({ length: n }, () => new Array(n).fill(0))
    let count = 1
    let offset = 0

    while (offset < Math.floor(n / 2)) {
        const boundary = n - offset - 1;
        for (let i = offset; i < boundary; i++) {
            result[offset][i] = count++;
        }
        for (let j = offset; j < boundary; j++)
            result[j][boundary] = count++

        for (let i = boundary; i > offset; i--) {
            result[boundary][i] = count++
        }

        for (let j = boundary; j > offset; j--) {
            result[j][offset] = count++
        }
        offset++
    }

    if (n % 2 === 1) {
        const middle = Math.floor(n / 2)
        result[middle][middle] = count++
    }

    return result

};
