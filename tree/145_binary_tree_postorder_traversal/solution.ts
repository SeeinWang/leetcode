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
 * 145. Binary Tree Postorder Traversal
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 *
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 *
 * Example: root = [1,null,2,3] → [3,2,1]
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

/* 核心 trick：后序 左→右→根 是前序 根→左→右 把左右交换后再反转的结果。


前序变形:  根 → 右 → 左
反转一下:  左 → 右 → 根  ✅ 后序
所以做一次「根→右→左」的遍历，把结果反转就行。 */


function postorderTraversal(root: TreeNode | null): number[] {
    const [s, resStack]: [TreeNode[], number[]] = [[], []]

    let cur = root;

    while (cur != null || s.length > 0) {
        while (cur != null) {
            resStack.push(cur.val!)
            s.push(cur)
            cur = cur.right
        }
        cur = s.pop()!.left
    }

    return resStack.reverse()
};
