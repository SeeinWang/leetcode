/*
 * 252. Meeting Rooms (LeetCode Premium)
 * https://leetcode.com/problems/meeting-rooms/
 *
 * Given an array of meeting time intervals where intervals[i] = [start_i, end_i],
 * determine if a person could attend all meetings (i.e. no two meetings overlap).
 *
 * Example 1:
 *     Input: intervals = [[0,30],[5,10],[15,20]]
 *     Output: false
 *
 * Example 2:
 *     Input: intervals = [[7,10],[2,4]]
 *     Output: true
 *
 * Constraints:
 *     0 <= intervals.length <= 10^4
 *     intervals[i].length == 2
 *     0 <= start_i < end_i <= 10^6
 */

function canAttendMeetings(intervals: number[][]): boolean {
    /*  const pointArray = new Array<{ index: number, value: number }>()
     for (const interval of intervals) {
         pointArray.push({ index: interval[0], value: 1 })
         pointArray.push({ index: interval[1], value: -1 })
     }
 
     pointArray.sort((a, b) => a.index - b.index || a.value - b.value)
 
     let count = 0
 
     for (const point of pointArray) {
         count += point.value;
         if (count > 1) return false
     }
 
     return true */

    const sorted = intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i][1] > sorted[i + 1][0]) return false
    }
    return true

}
