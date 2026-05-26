package main

/*
 * 428. Serialize and Deserialize N-ary Tree
 * https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/
 *
 * Design an algorithm to serialize and deserialize an N-ary tree.
 * No restriction on the serialization format.
 */

// Definition for a Node.
type Node struct {
	Val      int
	Children []*Node
}

type Codec struct{}

func Constructor() Codec { return Codec{} }

func (c *Codec) serialize(root *Node) string {

}

func (c *Codec) deserialize(data string) *Node {

}
