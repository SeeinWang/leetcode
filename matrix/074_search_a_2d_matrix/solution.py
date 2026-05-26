"""
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/

Search for target in matrix where each row is sorted and first int of each row > last of previous row.
Must run in O(log(m*n)) time.

Example 1: matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3 → true
Example 2: target=13 → false

Constraints:
    1 <= m, n <= 100
    -10^4 <= matrix[i][j] <= 10^4
"""
