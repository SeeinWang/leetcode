// 304. Range Sum Query 2D - Immutable
// https://leetcode.com/problems/range-sum-query-2d-immutable/
//
// Given a 2D matrix, implement NumMatrix that supports:
//   - SumRegion(row1, col1, row2, col2): sum of the rectangle from
//     (row1, col1) to (row2, col2) inclusive.
//
// Many queries will be made — preprocess so each query is fast.

package main

type NumMatrix struct {
}

func Constructor(matrix [][]int) NumMatrix {
	return NumMatrix{}
}

func (nm *NumMatrix) SumRegion(row1, col1, row2, col2 int) int {
	return 0
}
