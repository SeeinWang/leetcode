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
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * Given two integer arrays preorder and inorder where preorder is the preorder
 * traversal of a binary tree and inorder is the inorder traversal of the same tree,
 * construct and return the binary tree.
 *
 * Constraints: 1 <= preorder.length <= 3000, -3000 <= values <= 3000
 *
 * Pattern (shared with 106):
 *   inorder 定边界，pre/post 定根。
 *   - preorder/postorder 提供「当前子树的 root」：preorder 从左端取，postorder 从右端取。
 *   - inorder 用哈希表 O(1) 定位 root，把范围切成左右两半。
 *   - 左右子树大小由 inorder range 决定，回推 pre/post 里下一棵子树的根位置。
 *   单独 preorder + postorder 通常无法唯一还原二叉树——缺少能划分左右的 inorder。
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inMap = new Map(inorder.map((val, i) => [val, i]));

    const helper = (preStart: number, inStart: number, inEnd: number): TreeNode | null => {
        if (inStart > inEnd) return null;
        const nodeVal = preorder[preStart]
        const node = new TreeNode(nodeVal)
        const rootIdx = inMap.get(nodeVal)!
        const leftSize = rootIdx - inStart;
        node.left = helper(preStart + 1, inStart, rootIdx - 1)
        node.right = helper(preStart + 1 + leftSize, rootIdx + 1, inEnd)
        return node
    }

    return helper(0, 0, preorder.length - 1)
};
