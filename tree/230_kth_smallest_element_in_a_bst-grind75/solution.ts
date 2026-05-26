/*
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 *
 * Given the root of a BST and an integer k, return the kth smallest value.
 *
 * Example:
 *     Input: root = [3,1,4,null,2], k = 1
 *     Output: 1
 *
 * Constraints:
 *     1 <= k <= n <= 10^4
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

function kthSmallest(root: TreeNode, k: number): number {
    let stack: TreeNode[] = []
    let cur: TreeNode | null = root
    while (cur != null || stack.length > 0) {
        while (cur != null) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()!
        k--
        if (k === 0) {
            return cur.val
        }
        cur = cur.right
    }
    return -1
};
