/*
 * 207. Course Schedule
 * https://leetcode.com/problems/course-schedule/
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where
 * prerequisites[i] = [ai, bi] indicates that you must take course bi first if
 * you want to take course ai.
 *
 *   For example, the pair [0, 1], indicates that to take course 0 you have to
 *   first take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * Example 1:
 *   Input: numCourses = 2, prerequisites = [[1,0]]
 *   Output: true
 *   Explanation: There are a total of 2 courses to take. To take course 1 you
 *     should have finished course 0. So it is possible.
 *
 * Example 2:
 *   Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 *   Output: false
 *   Explanation: There are a total of 2 courses to take. To take course 1 you
 *     should have finished course 0, and to take course 0 you should also have
 *     finished course 1. So it is impossible.
 *
 * Constraints:
 *   - 1 <= numCourses <= 2000
 *   - 0 <= prerequisites.length <= 5000
 *   - prerequisites[i].length == 2
 *   - 0 <= ai, bi < numCourses
 *   - All the pairs prerequisites[i] are unique.
 */

// Approach: Kahn's topo sort (BFS on indegree=0), or DFS with WHITE/GRAY/BLACK cycle detection.
// Time: O(V + E), Space: O(V + E)

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const map = new Map<number, number[]>()
    const indegrees: number[] = new Array(numCourses).fill(0)
    let count = 0
    for (const pre of prerequisites) {
        const [end, start] = pre;
        if (!map.has(start)) map.set(start, [])
        map.get(start)!.push(end)
        indegrees[end]++
    }
    const queue: number[] = []
    let head = 0
    for (let i = 0; i < indegrees.length; i++) {
        if (indegrees[i] === 0) {
            queue.push(i)
        }
    }

    while (head < queue.length) {
        const cur = queue[head++]
        count++
        const outs = map.get(cur)
        if (outs) {
            for (const out of outs) {
                indegrees[out]--
                if (indegrees[out] === 0) {
                    queue.push(out)
                }
            }
        }
    }

    return count === numCourses
}
