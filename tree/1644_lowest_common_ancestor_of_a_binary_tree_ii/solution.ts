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
 * 1644. Lowest Common Ancestor of a Binary Tree II
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/
 *
 * Given the root of a binary tree, return the LCA of two given nodes p and q.
 * If either p or q does NOT exist in the tree, return null.
 *
 * Difference from 236:
 *   - 236 guarantees both p and q exist in the tree.
 *   - 1644 does NOT — you must verify both were actually found before returning the LCA.
 *
 * Constraints: 1 <= nodes <= 10^4, all values unique, p != q
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    let pExist = false;
    let qExist = false;

    function LCA(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
        if (root == null) return null
        const left = LCA(root.left, p, q)
        const right = LCA(root.right, p, q)
        if (root === p) pExist = true
        if (root === q) qExist = true
        if (root === p || root === q) return root;
        if (left && right) {
            return root
        }
        return left ?? right
    }

    const res = LCA(root, p, q)
    return (pExist && qExist) ? res : null
};
