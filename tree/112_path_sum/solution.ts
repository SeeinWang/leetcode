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
 * 112. Path Sum
 * https://leetcode.com/problems/path-sum/
 *
 * Given the root of a binary tree and an integer targetSum, return true if the
 * tree has a root-to-leaf path such that adding up all values along the path
 * equals targetSum.
 *
 * Example: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22 → true
 * Constraints: 0 <= number of nodes <= 5000, -1000 <= Node.val <= 1000
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {

    function dfs(root: TreeNode | null, sum: number): boolean {
        if (root === null) return false;
        const curSum = sum + root.val
        if (root.left == null && root.right == null && curSum === targetSum) {
            return true
        }
        return dfs(root.left, curSum) || dfs(root.right, curSum)

    }

    return dfs(root, 0)
};
