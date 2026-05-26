class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

/*
 * 1448. Count Good Nodes in Binary Tree
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 *
 * A node X is "good" if no node on the path from root to X has a value
 * strictly greater than X.val. Count all good nodes.
 *
 * DFS, passing the running max along the path:
 *   if node.val >= maxSoFar -> count it.
 *   recurse with max(maxSoFar, node.val).
 *
 * Time O(n), Space O(h).
 */

function goodNodes(root: TreeNode | null): number {
    let count = 0;
    // TODO
    function dfs(root: TreeNode | null, max: number): void {
        if (root == null) return
        if (root.val >= max) count++
        const newMax = Math.max(max, root.val)
        dfs(root.left, newMax)
        dfs(root.right, newMax)
    }
    dfs(root, -Infinity)
    return count
};
