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
 * 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 *
 * Invert the binary tree and return its root.
 *
 * Example 1: root = [4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]
 * Constraints: Nodes in [0, 100], -100 <= Node.val <= 100.
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
function invertTree(root: TreeNode | null): TreeNode | null {
    /* if (root == null || (root.left == null && root.right == null)) return root
    let cur = root
    const left = root.left
    cur.left = invertTree(root.right)
    cur.right = invertTree(left)
    return root */
    if (!root) {
        return null;
    } else {
        return {
            val: root.val,
            left: invertTree(root.right),
            right: invertTree(root.left)
        }

    }
};
