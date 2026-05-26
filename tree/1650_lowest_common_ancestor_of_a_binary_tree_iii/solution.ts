class Node {
    val: number
    left: Node | null
    right: Node | null
    parent: Node | null
    constructor(val?: number) {
        this.val = val === undefined ? 0 : val
        this.left = null
        this.right = null
        this.parent = null
    }
}

/*
 * 1650. Lowest Common Ancestor of a Binary Tree III
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
 *
 * Each node has a `parent` pointer. Root's parent is null.
 * No access to the root — only the two nodes p and q.
 *
 * Goal: find their LCA in O(h) time, O(1) extra space.
 *
 * Trick: reduce to "Intersection of Two Linked Lists" (LC 160).
 *   - Two pointers a = p, b = q.
 *   - Each step: a = a.parent ?? q; b = b.parent ?? p.
 *   - They will meet at LCA after at most (depth(p) + depth(q)) steps.
 */

function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
    let a = p
    let b = q

    while (a !== b) {
        a = (a == null) ? q : a.parent;
        b = (b == null) ? p : b.parent;
    }


    return a
};
