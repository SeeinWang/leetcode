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
 * 94. Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example: root = [1,null,2,3] → [1,3,2]
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

/* function helper(root: TreeNode | null, res: number[]) {
    if (!root) return;
    helper(root.left, res);
    res.push(root.val)
    helper(root.right, res)
}

function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = []
    helper(root, res)
    return res;
}; */

function inorderTraversal(root: TreeNode | null): number[] {
    const stack: TreeNode[] = []
    const res = []
    let cur = root;

    while (cur !== null || stack.length > 0) {
        while (cur !== null) {
            stack.push(cur)
            cur = cur.left;
        }
        cur = stack.pop()!;
        res.push(cur.val)
        cur = cur.right
    }

    return res
};
