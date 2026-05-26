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
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values (i.e., from left to right, level by level).
 *
 * Example: root = [3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]
 * Constraints: 0 <= number of nodes <= 2000, -1000 <= Node.val <= 1000
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

function levelOrder(root: TreeNode | null): number[][] {
    /* const queue: TreeNode[] = []
    const res: number[][] = [];
    let head = 0

    if (!root) return res;
    queue.push(root)

    while (queue.length > head) {
        const size = queue.length - head;
        const level = []
        for (let i = 0; i < size; i++) {
            const cur = queue[head++]
            level.push(cur!.val)
            if (cur!.left) {
                queue.push(cur!.left)
            }
            if (cur!.right) {
                queue.push(cur!.right)
            }
        }
        res.push(level)
    }

    return res; */

    const res: number[][] = []

    const dfs = (node: TreeNode | null, depth: number) => {
        if (!node) return;
        if (depth === res.length) res.push([])
        res[depth].push(node.val)
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }

    dfs(root, 0)
    return res
};
