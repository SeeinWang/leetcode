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
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 *
 * Given two integer arrays inorder and postorder where inorder is the inorder
 * traversal and postorder is the postorder traversal, construct and return the binary tree.
 *
 * Constraints: 1 <= inorder.length <= 3000, -3000 <= values <= 3000
 *
 * Pattern (shared with 105):
 *   inorder 定边界，pre/post 定根。
 *   - preorder/postorder 提供「当前子树的 root」：preorder 从左端取，postorder 从右端取。
 *   - inorder 用哈希表 O(1) 定位 root，把范围切成左右两半。
 *   - 左右子树大小由 inorder range 决定，回推 pre/post 里下一棵子树的根位置。
 *   106 的小差异：root 从 postorder 末尾取，建议先递归右子树再递归左子树。
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const inMap = new Map(inorder.map((val, i) => [val, i]));

    const helper = (postEnd: number, inStart: number, inEnd: number): TreeNode | null => {
        if (inStart > inEnd) return null
        const nodeVal = postorder[postEnd]
        const node = new TreeNode(nodeVal)
        const rootIdx = inMap.get(nodeVal)!
        const rightTreeSize = inEnd - rootIdx;
        node.right = helper(postEnd - 1, rootIdx + 1, inEnd)
        node.left = helper(postEnd - 1 - rightTreeSize, inStart, rootIdx - 1)
        return node
    }

    const length = postorder.length

    return helper(length - 1, 0, length - 1)

};
