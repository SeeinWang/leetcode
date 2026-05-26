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
 * 100. Same Tree
 * https://leetcode.com/problems/same-tree/
 *
 * Check if two binary trees are structurally identical with same values.
 *
 * Example 1: p = [1,2,3], q = [1,2,3] → true
 * Example 2: p = [1,2], q = [1,null,2] → false
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
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

};
