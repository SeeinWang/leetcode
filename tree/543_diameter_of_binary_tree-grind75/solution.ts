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
 * 543. Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree/
 *
 * Return the length of the diameter (longest path between any two nodes).
 *
 * Example 1: root = [1,2,3,4,5] → 3
 * Constraints: Nodes in [1, 10^4].
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
function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = 0;
    function dfs(root: TreeNode | null): number {
        if (root == null) return 0;
        const left = dfs(root.left)
        const right = dfs(root.right)
        max = Math.max(max, left + right)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return max

};
