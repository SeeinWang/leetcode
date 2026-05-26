/*
 * 1008. Construct Binary Search Tree from Preorder Traversal
 * https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 *
 * Given an array of integers preorder, which represents the preorder
 * traversal of a BST (i.e., binary search tree), construct the tree and
 * return its root.
 *
 * Constraints:
 *     1 <= preorder.length <= 100
 *     1 <= preorder[i] <= 1000
 *     All the values of preorder are unique.
 */

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

function bstFromPreorder(preorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null

    let i = 0;

    function dfs(min: number, max: number): TreeNode | null {
        if (i >= preorder.length || preorder[i] < min || preorder[i] > max) {
            return null
        }
        const cur = preorder[i++]
        return new TreeNode(cur, dfs(min, cur), dfs(cur, max))
    }

    return dfs(-Infinity, Infinity)
};
