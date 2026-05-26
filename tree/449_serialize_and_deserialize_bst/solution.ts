/*
 * 449. Serialize and Deserialize BST
 * https://leetcode.com/problems/serialize-and-deserialize-bst/
 *
 * Design an algorithm to serialize and deserialize a binary search tree.
 * The encoded string should be as compact as possible.
 *
 * Constraints:
 *     0 <= number of nodes <= 10^4
 *     0 <= Node.val <= 10^4
 *     All values are unique.
 *     The input tree is guaranteed to be a BST.
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
    const out: number[] = []
    const go = (n: TreeNode | null) => {
        if (!n) return
        out.push(n.val)
        go(n.left); go(n.right)
    }
    go(root)
    return out.join(',')
};

function deserialize(data: string): TreeNode | null {
    if (data === "") return null
    const queue = data.split(',').map(Number)
    let i = 0;

    function dfs(min: number, max: number): TreeNode | null {
        if (i >= queue.length || queue[i] > max || queue[i] < min) {
            return null
        }
        const cur = queue[i++]
        return new TreeNode(cur, dfs(min, cur), dfs(cur, max))
    }

    return dfs(-Infinity, Infinity)
};
