/*
 * 297. Serialize and Deserialize Binary Tree
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 *
 * Design an algorithm to serialize and deserialize a binary tree.
 *
 * Constraints:
 *     0 <= number of nodes <= 10^4
 *     -1000 <= Node.val <= 1000
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

function serialize(root: TreeNode | null): string {
    if (root == null) return "#"
    return root.val + "," + serialize(root.left) + "," + serialize(root.right)
};


function deserialize(data: string): TreeNode | null {
    const queue = data.split(",")
    let i = 0

    const dfs = (): TreeNode | null => {
        if (i >= queue.length) throw new Error("malformed input")
        const cur = queue[i++]
        if (cur === '#') return null
        return new TreeNode(Number(cur), dfs(), dfs())
    }

    return dfs()
};
