/*
 * 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/
 *
 * Given the root of a binary tree, return the values of nodes visible from
 * the right side (the rightmost node of each level).
 *
 * Example:
 *     Input: root = [1,2,3,null,5,null,4]
 *     Output: [1,3,4]
 *
 * Constraints:
 *     0 <= number of nodes <= 100
 *     -100 <= Node.val <= 100
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

function rightSideView(root: TreeNode | null): number[] {
    const result = []
    let queue: TreeNode[] = []
    let head = 0
    if (root) queue.push(root)

    while (head < queue.length) {
        const size = queue.length - head
        for (let i = 0; i < size; i++) {
            const cur: TreeNode = queue[head++]
            if (i === size - 1) {
                result.push(cur.val)
            }
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
        }
    }

    return result
};
