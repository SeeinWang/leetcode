class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/*
 * 538. Convert BST to Greater Tree
 * https://leetcode.com/problems/convert-bst-to-greater-tree/
 *
 * Given the root of a BST, convert it to a Greater Tree such that every key
 * is updated to the original key plus the sum of all keys greater than it.
 *
 * Constraints: 0 <= number of nodes <= 10^4, -10^4 <= Node.val <= 10^4
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

function convertBST(root: TreeNode | null): TreeNode | null {

};
