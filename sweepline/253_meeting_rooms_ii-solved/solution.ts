/*
 * 253. Meeting Rooms II (LeetCode Premium)
 * https://leetcode.com/problems/meeting-rooms-ii/
 *
 * Given an array of meeting time intervals where intervals[i] = [start_i, end_i],
 * return the minimum number of conference rooms required.
 *
 * Example 1:
 *     Input: intervals = [[0,30],[5,10],[15,20]]
 *     Output: 2
 *
 * Example 2:
 *     Input: intervals = [[7,10],[2,4]]
 *     Output: 1
 *
 * Constraints:
 *     1 <= intervals.length <= 10^4
 *     0 <= start_i < end_i <= 10^6
 */

// 多种解法： 1. 数飞机 2. priority queue 3.two pointer, start & end 两个array

function minMeetingRooms(intervals: number[][]): number {
    const conArray = intervals.flatMap(interval => [{
        index: interval[0], value: 1,
    }, {
        index: interval[1], value: -1
    }])

    conArray.sort((a, b) => a.index - b.index || a.value - b.value)

    let [max, sum] = [0, 0]

    for (const c of conArray) {
        sum += c.value;
        max = Math.max(max, sum)
    }
    return max
}
