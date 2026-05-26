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
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 *
 * Given a BST, find the lowest common ancestor of two given nodes p and q.
 *
 * Constraints: 2 <= number of nodes <= 10^5, -10^9 <= Node.val <= 10^9
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

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    if (root.val > p.val && root.val > q.val && root.left) return lowestCommonAncestor(root.left, p, q)
    else if (root.val < p.val && root.val < q.val && root.right) return lowestCommonAncestor(root.right, p, q)
    else return root
};
