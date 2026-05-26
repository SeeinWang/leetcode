/*
 * 173. Binary Search Tree Iterator
 * https://leetcode.com/problems/binary-search-tree-iterator/
 *
 * Implement the BSTIterator class that represents an iterator over the
 * in-order traversal of a binary search tree (BST):
 *   - BSTIterator(TreeNode root): initialize with the root of the BST.
 *   - boolean hasNext(): return true if there exists a number in the
 *     traversal to the right of the pointer.
 *   - int next(): move the pointer to the right, then return the number.
 *
 * The pointer should be initialized to a non-existent number smaller than
 * any element in the BST, so the first next() returns the smallest.
 *
 * Follow-up:
 *   Could you implement next() and hasNext() in average O(1) time and use
 *   O(h) memory, where h is the height of the tree?
 *
 * Example:
 *     Input:
 *         ["BSTIterator","next","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]
 *         [[[7,3,15,null,null,9,20]],[],[],[],[],[],[],[],[],[]]
 *     Output:
 *         [null,3,7,true,9,true,15,true,20,false]
 *
 * Constraints:
 *     - Number of nodes in the tree: [1, 10^5]
 *     - 0 <= Node.val <= 10^6
 *     - At most 10^5 calls in total to hasNext and next.
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

class BSTIterator {
    stack: TreeNode[]
    constructor(root: TreeNode | null) {
        this.stack = []
        this.pushAllLeft(root)
    }

    next(): number {
        const cur = this.stack.pop()
        this.pushAllLeft(cur?.right || null)
        return cur?.val!
    }

    hasNext(): boolean {
        return this.stack.length !== 0
    }

    pushAllLeft(root: TreeNode | null): void {
        while (root != null) {
            this.stack.push(root)
            root = root.left
        }
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
