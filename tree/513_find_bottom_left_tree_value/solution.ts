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
 * 513. Find Bottom Left Tree Value
 * https://leetcode.com/problems/find-bottom-left-tree-value/
 *
 * Given the root of a binary tree, return the leftmost value in the last row.
 *
 * Example: root = [2,1,3] → 1
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

function findBottomLeftValue(root: TreeNode): number {
    const queue: TreeNode[] = []
    let head = 0
    queue.push(root)
    let curLeft = root.val

    while (head < queue.length) {
        const size = queue.length - head
        for (let i = 0; i < size; i++) {
            const cur = queue[head++]
            if (i === 0) {
                curLeft = cur.val
            }
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
        }
    }
    return curLeft
};
