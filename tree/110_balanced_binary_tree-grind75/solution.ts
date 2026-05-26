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
 * 110. Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/
 *
 * Determine if the binary tree is height-balanced.
 *
 * Example 1: root = [3,9,20,null,null,15,7] → true
 * Example 2: root = [1,2,2,3,3,null,null,4,4] → false
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
function isBalanced(root: TreeNode | null): boolean {

    function countHeight(root: TreeNode | null): number {
        if (root === null) return 0
        const left = countHeight(root.left)
        if (left === -1) return -1
        const right = countHeight(root.right)
        if (right === -1) return -1
        if (Math.abs(left - right) > 1) {
            return -1
        }
        return Math.max(left, right) + 1
    }

    return countHeight(root) !== -1
};
