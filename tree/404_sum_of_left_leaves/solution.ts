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
 * 404. Sum of Left Leaves
 * https://leetcode.com/problems/sum-of-left-leaves/
 *
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * Example: root = [3,9,20,null,null,15,7] → 24 (9 + 15)
 * Constraints: 1 <= number of nodes <= 1000, -1000 <= Node.val <= 1000
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

function sumOfLeftLeaves(root: TreeNode | null): number {

};
