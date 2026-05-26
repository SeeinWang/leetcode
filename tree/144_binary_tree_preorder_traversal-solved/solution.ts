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
 * 144. Binary Tree Preorder Traversal
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 *
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 *
 * Example: root = [1,null,2,3] → [1,2,3]
 * Constraints: 0 <= number of nodes <= 100, -100 <= Node.val <= 100
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

function preorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = []
    const stack: TreeNode[] = []

    if (root) stack.push(root)

    while (stack.length > 0) {
        const cur = stack.pop()!
        res.push(cur.val!)
        if (cur.right) {
            stack.push(cur.right)
        }
        if (cur.left) {
            stack.push(cur.left)
        }
    }

    return res
};
