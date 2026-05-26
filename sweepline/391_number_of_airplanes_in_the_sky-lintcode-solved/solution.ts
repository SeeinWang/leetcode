/*
 * LintCode 391. Number of Airplanes in the Sky
 * https://www.lintcode.com/problem/391/
 *
 * Given a list of time intervals representing airplane takeoff/landing times,
 * return the maximum number of airplanes in the sky at the same time.
 *
 * 约定：如果一架飞机降落的同时另一架起飞，认为它们没有同时在天上。
 *
 * Example 1:
 *     Input: [[1, 10], [2, 3], [5, 8], [4, 7]]
 *     Output: 3
 *
 * Example 2:
 *     Input: [[1, 2], [2, 3], [3, 4]]
 *     Output: 1
 *
 * Constraints:
 *     - 0 <= intervals.length <= 10^4
 *     - interval.start < interval.end
 */

function countOfAirplanes(airplanes: number[][]): number {
    /* const pointArray = new Array<{ index: number, value: number }>() */
    /*  for (const air of airplanes) {
         pointArray.push({ index: air[0], value: 1 })
         pointArray.push({ index: air[1], value: -1 })
     } */
    const pointArray = airplanes.flatMap(air => [
        { index: air[0], value: 1 },
        { index: air[1], value: -1 }
    ])

    pointArray.sort((a, b) =>
        a.index - b.index || a.value - b.value
    )

    let [max, plane] = [0, 0]

    for (const point of pointArray) {
        plane += point.value
        max = Math.max(max, plane)
    }

    return max;

}
