/*
 * Monotonic Stack Template
 *
 * A stack kept in monotonic order (increasing or decreasing). When the incoming
 * element breaks the order, you pop — and each pop resolves an answer for the
 * popped element (its "next greater / next smaller" neighbor). Store indices
 * when you need distances or widths; store values when you only need the
 * neighbor.
 *
 * Decreasing stack -> finds the NEXT GREATER element.
 * Increasing stack -> finds the NEXT SMALLER element.
 *
 * Use cases:
 * - Next greater element (LeetCode 496, 503)
 * - Daily temperatures (LeetCode 739)
 * - Largest rectangle in histogram (LeetCode 84)
 * - Trapping rain water (LeetCode 42)
 */

function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length;
    const res: number[] = new Array(n).fill(-1);
    const stack: number[] = []; // indices, values decreasing
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            res[stack.pop()!] = nums[i];
        }
        stack.push(i);
    }
    return res;
}

const _demo = nextGreaterElements([2, 1, 2, 4, 3]);
console.log(_demo); // [4, 2, 4, -1, -1]
