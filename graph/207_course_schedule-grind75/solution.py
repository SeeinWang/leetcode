"""
207. Course Schedule
https://leetcode.com/problems/course-schedule/

There are numCourses courses (0 to numCourses-1). prerequisites[i] = [ai, bi] means
you must take bi before ai. Return true if you can finish all courses.

Example 1:
    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true

Example 2:
    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false (cycle)

Constraints:
    1 <= numCourses <= 2000
    0 <= prerequisites.length <= 5000
    All prerequisite pairs are unique.
"""
