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
 * 617. Merge Two Binary Trees
 * https://leetcode.com/problems/merge-two-binary-trees/
 *
 * Merge two binary trees by overlapping their nodes. If two nodes overlap,
 * sum their values; otherwise use the non-null node.
 *
 * Example: [1,3,2,5] merged with [2,1,3,null,4,null,7] → [3,4,5,5,4,null,7]
 * Constraints: 0 <= number of nodes <= 2000, -10^4 <= Node.val <= 10^4
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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {

};
