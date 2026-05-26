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
 * 108. Convert Sorted Array to Binary Search Tree
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 *
 * Given an integer array nums where the elements are sorted in ascending order,
 * convert it to a height-balanced BST.
 *
 * Example: nums = [-10,-3,0,5,9] → [0,-3,9,-10,null,5]
 * Constraints: 1 <= nums.length <= 10^4, -10^4 <= nums[i] <= 10^4, sorted in ascending order
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


function sortedArrayToBST(nums: number[]): TreeNode | null {
    function helper(start: number, end: number): TreeNode | null {
        if (start > end) return null
        const mid = start + Math.floor((end - start) / 2)
        const node = new TreeNode(nums[mid])
        node.left = helper(start, mid - 1)
        node.right = helper(mid + 1, end)
        return node
    }

    return helper(0, nums.length - 1)
};
