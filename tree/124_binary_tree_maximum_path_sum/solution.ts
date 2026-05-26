class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

/*
 * 124. Binary Tree Maximum Path Sum
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 *
 * Find max sum over any path (connected nodes, each used once; need not
 * pass root or touch leaves).
 *
 * DFS returns single-branch gain: node.val + max(leftGain, rightGain).
 * A global tracks the best "bent" path: node.val + leftGain + rightGain.
 * Clamp negative gains to 0.
 *
 * Time O(n), Space O(h).
 */

function maxPathSum(root: TreeNode | null): number {
    let maxValue = -Infinity
    function dfs(node: TreeNode | null): number {
        if (node == null) return 0
        const left = Math.max(0, dfs(node!.left))
        const right = Math.max(0, dfs(node!.right))
        maxValue = Math.max(maxValue, left + right + node.val)
        return Math.max(left, right) + node.val
    }
    dfs(root)
    return maxValue
};
