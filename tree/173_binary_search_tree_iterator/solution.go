package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type BSTIterator struct {
}

func Constructor(root *TreeNode) BSTIterator {
	return BSTIterator{}
}

func (it *BSTIterator) Next() int {
	return 0
}

func (it *BSTIterator) HasNext() bool {
	return false
}
