package main

// 1650. Lowest Common Ancestor of a Binary Tree III
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
//
// Nodes carry a Parent pointer. Find LCA of p and q without access to root.
// Two-pointer trick (LC 160 style): when hit nil, jump to the other start.

type Node struct {
	Val    int
	Left   *Node
	Right  *Node
	Parent *Node
}

func lowestCommonAncestor(p, q *Node) *Node {
	// TODO
	return nil
}
