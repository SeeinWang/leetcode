package main

// 124. Binary Tree Maximum Path Sum
// https://leetcode.com/problems/binary-tree-maximum-path-sum/
//
// Find max sum over any path (connected nodes, each used once; need not
// pass root or touch leaves).
//
// DFS returns single-branch gain: node.Val + max(leftGain, rightGain).
// A global tracks the best "bent" path: node.Val + leftGain + rightGain.
// Clamp negative gains to 0.

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxPathSum(root *TreeNode) int {
	// TODO
	return 0
}
