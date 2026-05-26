/*
 * 435. Non-overlapping Intervals
 * https://leetcode.com/problems/non-overlapping-intervals/
 *
 * Given an array of intervals intervals where intervals[i] = [start_i, end_i],
 * return the minimum number of intervals you need to remove to make the rest
 * of the intervals non-overlapping.
 *
 * Note: Intervals that only touch at a point (e.g. [1,2] and [2,3]) are NOT
 * considered overlapping.
 *
 * Example 1:
 *     Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
 *     Output: 1
 *     Explanation: [1,3] can be removed and the rest are non-overlapping.
 *
 * Example 2:
 *     Input: intervals = [[1,2],[1,2],[1,2]]
 *     Output: 2
 *
 * Example 3:
 *     Input: intervals = [[1,2],[2,3]]
 *     Output: 0
 *
 * Constraints:
 *     - 1 <= intervals.length <= 10^5
 *     - intervals[i].length == 2
 *     - -5 * 10^4 <= start_i < end_i <= 5 * 10^4
 */

function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1])
    let [kept, end] = [1, intervals[0][1]]

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= end) {
            kept++
            end = intervals[i][1]
        }
    }

    return intervals.length - kept

};
