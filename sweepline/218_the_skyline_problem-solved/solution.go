/*
218. The Skyline Problem
https://leetcode.com/problems/the-skyline-problem/

A city's skyline is the outer contour of the silhouette formed by all the
buildings in that city when viewed from a distance. Given the locations
and heights of all the buildings, return the skyline formed by these
buildings collectively.

The geometric information of each building is given in the array
buildings where buildings[i] = [left_i, right_i, height_i].

The skyline should be represented as a list of "key points" sorted by
their x-coordinate. Each key point is the left endpoint of some
horizontal segment in the skyline except the last point, which has
y-coordinate 0 and marks termination.

There must be no consecutive horizontal lines of equal height in the
output.

Example 1:
    Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
    Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]

Example 2:
    Input: buildings = [[0,2,3],[2,5,3]]
    Output: [[0,3],[5,0]]

Constraints:
    1 <= buildings.length <= 10^4
    0 <= left_i < right_i <= 2^31 - 1
    1 <= height_i <= 2^31 - 1
    buildings is sorted by left_i in non-decreasing order.
*/

func getSkyline(buildings [][]int) [][]int {

}
