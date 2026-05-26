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
 * 257. Binary Tree Paths
 * https://leetcode.com/problems/binary-tree-paths/
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * Example: root = [1,2,3,null,5] → ["1->2->5","1->3"]
 * Constraints: 1 <= number of nodes <= 100, -100 <= Node.val <= 100
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

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = []

    function dfs(path: string, curNode: TreeNode): void {
        if (curNode.left == null && curNode.right == null) {
            result.push(path)
        }
        if (curNode.left) {
            dfs(path + "->" + curNode.left.val, curNode.left)
        }
        if (curNode.right) {
            dfs(path + "->" + curNode.right.val, curNode.right)
        }
    }

    if (root == null) return []
    else {
        dfs(String(root!.val), root!)
    }

    return result;
};
