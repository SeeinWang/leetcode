class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/*
 * 700. Search in a Binary Search Tree
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 *
 * Given the root of a BST and an integer val, find the node where val equals
 * the node's value and return the subtree rooted at that node. Return null if not found.
 *
 * Constraints: 1 <= number of nodes <= 5000, 1 <= Node.val <= 10^7, 1 <= val <= 10^7
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root == null) return null;
    if (root.val > val) {
        return searchBST(root.left, val)
    }
    if (root.val < val) {
        return searchBST(root.right, val)
    }
    return root
};
