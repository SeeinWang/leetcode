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
 * 889. Construct Binary Tree from Preorder and Postorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 *
 * Given two integer arrays, preorder and postorder where preorder is the preorder
 * traversal of a binary tree of distinct values and postorder is the postorder
 * traversal of the same tree, reconstruct and return the binary tree.
 *
 * If there exist multiple answers, you can return any of them.
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


function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    const postMap = new Map(postorder.map((val, i) => [val, i]))
    const len = preorder.length

    function builder(preStart: number, preEnd: number, postStart: number, postEnd: number): TreeNode | null {
        if (preStart > preEnd) return null;
        const node = new TreeNode(preorder[preStart]);
        if (preStart === preEnd) return node;

        const leftRootVal = preorder[preStart + 1];
        const leftRootIdx = postMap.get(leftRootVal)!;
        const leftSize = leftRootIdx - postStart + 1;

        node.left = builder(preStart + 1, preStart + leftSize, postStart, leftRootIdx);
        node.right = builder(preStart + leftSize + 1, preEnd, leftRootIdx + 1, postEnd - 1);
        return node;
    }
    return builder(0, len - 1, 0, len - 1)
};
