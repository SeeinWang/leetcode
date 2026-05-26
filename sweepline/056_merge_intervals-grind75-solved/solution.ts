/*
 * 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 *
 * Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping
 * intervals, and return an array of the non-overlapping intervals that cover all the
 * intervals in the input.
 *
 * Example 1:
 *     Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 *     Output: [[1,6],[8,10],[15,18]]
 *     Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 *
 * Example 2:
 *     Input: intervals = [[1,4],[4,5]]
 *     Output: [[1,5]]
 *     Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * Example 3:
 *     Input: intervals = [[4,7],[1,4]]
 *     Output: [[1,7]]
 *     Explanation: Intervals [1,4] and [4,7] are considered overlapping.
 *
 * Constraints:
 *     - 1 <= intervals.length <= 10^4
 *     - intervals[i].length == 2
 *     - 0 <= start_i <= end_i <= 10^4
 */

function merge(intervals: number[][]): number[][] {
    const sorted = [...intervals].sort((a, b) => a[0] - b[0])
    const result = [sorted[0]]
    for (let i = 1; i < sorted.length; i++) {
        const last = result[result.length - 1];
        if (sorted[i][0] <= last[1]) {
            last[1] = Math.max(sorted[i][1], last[1]);
        } else {
            result.push(sorted[i])
        }
    }
    return result;
};
