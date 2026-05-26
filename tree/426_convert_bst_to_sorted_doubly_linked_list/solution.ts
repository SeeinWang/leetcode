class _Node {
    val: number
    left: _Node | null
    right: _Node | null
    constructor(val?: number, left?: _Node | null, right?: _Node | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/*
 * 426. Convert Binary Search Tree to Sorted Doubly Linked List
 * https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
 *
 * Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.
 * The left pointer of each node should point to its predecessor, and the right
 * pointer to its successor. The first node's predecessor is the last node, and
 * the last node's successor is the first node (circular).
 */

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function treeToDoublyList(root: _Node | null): _Node | null {
    if (root == null) return null
    let cur: _Node | null = root
    const stack: _Node[] = []
    let first: _Node | null = null
    let prev: _Node | null = null
    while (cur != null || stack.length > 0) {
        while (cur != null) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()!
        if (first == null) first = cur
        if (prev != null) {
            prev.right = cur
            cur.left = prev
        }
        prev = cur
        cur = cur.right
    }
    first!.left = prev
    prev!.right = first

    return first
};
