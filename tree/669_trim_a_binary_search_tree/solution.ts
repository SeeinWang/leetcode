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
 * 669. Trim a Binary Search Tree
 * https://leetcode.com/problems/trim-a-binary-search-tree/
 *
 * Given the root of a BST and the values low and high, trim the tree so that all its
 * values are in [low, high]. Return the root of the trimmed tree.
 *
 * Constraints: 1 <= number of nodes <= 10^4, 0 <= Node.val <= 10^4, all values unique
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

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if (root == null) return null
    if (root.val < low) return trimBST(root.right, low, high)
    if (root.val > low) return trimBST(root.left, low, high)
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
};
