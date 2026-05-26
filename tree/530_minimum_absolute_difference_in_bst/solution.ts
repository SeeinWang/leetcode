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
 * 530. Minimum Absolute Difference in BST
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 *
 * Given the root of a BST, return the minimum absolute difference between
 * the values of any two different nodes in the tree.
 *
 * Constraints: 2 <= number of nodes <= 10^4, 0 <= Node.val <= 10^5
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

function getMinimumDifference(root: TreeNode | null): number {
    let min = Infinity;
    let prev: TreeNode | null = null
    const stack: TreeNode[] = []
    let cur: TreeNode | null = root

    while (cur != null || stack.length > 0) {
        while (cur != null) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()!
        if (prev != null) {
            const diff = cur.val - prev.val
            min = Math.min(diff, min)
        }
        prev = cur
        cur = cur.right
    }

    return min
};
