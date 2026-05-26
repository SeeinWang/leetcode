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
 * 111. Minimum Depth of Binary Tree
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 *
 * Given a binary tree, find its minimum depth. The minimum depth is the number
 * of nodes along the shortest path from the root node down to the nearest leaf node.
 *
 * Constraints: 0 <= number of nodes <= 10^5, -1000 <= Node.val <= 1000
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

function minDepth(root: TreeNode | null): number {
    if (root == null) return 0;
    const queue = [root]
    let head = 0
    let min = 1

    while (head < queue.length) {
        const size = queue.length - head
        for (let i = 0; i < size; i++) {
            const cur = queue[head++]
            if (cur.left == null && cur.right == null) {
                min + 1;
                break;
            } else {
                if (cur.left) queue.push(cur.left)
                if (cur.right) queue.push(cur.right)
            }
        }
        min++
    }

    return min
};
