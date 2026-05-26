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
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 * Given the root of a binary tree, determine if it is a valid binary search tree.
 *
 * Constraints: 1 <= number of nodes <= 10^4, -2^31 <= Node.val <= 2^31 - 1
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

/* function helper(root: TreeNode | null, min: number, max: number): boolean {
    if (root == null) return true
    if (root.val <= min || root.val >= max) return false;
    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}
function isValidBST(root: TreeNode | null): boolean {
    return helper(root, -Infinity, Infinity)
};
 */

function isValidBST(root: TreeNode | null): boolean {
    let prev: TreeNode | null = null
    const stack = []
    let cur = root
    while (cur != null || stack.length > 0) {
        while (cur != null) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()!
        if (prev != null && cur.val < prev!.val) return false
        prev = cur
        cur = cur.right
    }

    return true
}