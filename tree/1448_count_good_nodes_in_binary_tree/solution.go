package main

// 1448. Count Good Nodes in Binary Tree
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
//
// A node X is "good" if no node on the path from root to X has a value
// strictly greater than X.Val. Count all good nodes.
//
// DFS, passing the running max along the path.

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func goodNodes(root *TreeNode) int {
	// TODO
	return 0
}
