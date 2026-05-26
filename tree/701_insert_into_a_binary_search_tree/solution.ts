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
 * 701. Insert into a Binary Search Tree
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/
 *
 * Given the root of a BST and a value to insert, return the root of the BST
 * after the insertion.
 *
 * Constraints: 0 <= number of nodes <= 10^4, -10^8 <= Node.val <= 10^8, all values unique
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root == null) {
        return new TreeNode(val)
    }
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val)
    }
    return root
};
