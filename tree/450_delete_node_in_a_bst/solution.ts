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
 * 450. Delete Node in a BST
 * https://leetcode.com/problems/delete-node-in-a-bst/
 *
 * Given a root node reference of a BST and a key, delete the node with the given key
 * in the BST. Return the root node reference of the BST.
 *
 * Constraints: 0 <= number of nodes <= 10^4, -10^5 <= Node.val <= 10^5, all values unique
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

function findMin(node: TreeNode) {
    while (node != null && node.left != null) node = node.left
    return node.val
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root == null) return null
    if (key < root.val) root.left = deleteNode(root.left, key)
    else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if (root.left === null) {
        root = root.right
    } else if (root.right === null) {
        root = root.left
    } else {
        root.val = findMin(root.right!)
        root.right = deleteNode(root.right, root.val)
    }
    return root;
};
