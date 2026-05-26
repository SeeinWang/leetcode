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
 * 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes p and q.
 *
 * Constraints: 2 <= number of nodes <= 10^5, -10^9 <= Node.val <= 10^9
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    /*  if (root == null || root == q || root == q) return root;
     const left = lowestCommonAncestor(root.left, p, q)
     const right = lowestCommonAncestor(root.right, p, q)
     if (left && right) return root
     return left ?? right */

    const map = new Map<TreeNode, TreeNode | null>()

    function dfs(parent: TreeNode | null, child: TreeNode | null) {
        if (child == null) return
        map.set(child, parent)
        dfs(child, child.left)
        dfs(child, child.right)
    }

    dfs(null, root)

    const ancestorSet = new Set<TreeNode>()

    let cur: TreeNode | null = p

    while (cur != null) {
        ancestorSet.add(cur)
        cur = map.get(cur) ?? null
    }

    cur = q

    while (cur != null && !ancestorSet.has(cur)) {
        cur = map.get(cur) ?? null
    }

    return cur
};
