package main

/*
 * 449. Serialize and Deserialize BST
 * https://leetcode.com/problems/serialize-and-deserialize-bst/
 *
 * Design an algorithm to serialize and deserialize a BST. The encoded
 * string should be as compact as possible.
 */

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type Codec struct{}

func Constructor() Codec { return Codec{} }

func (c *Codec) serialize(root *TreeNode) string {

}

func (c *Codec) deserialize(data string) *TreeNode {

}
