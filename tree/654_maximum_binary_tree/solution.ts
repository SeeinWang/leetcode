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
 * 654. Maximum Binary Tree
 * https://leetcode.com/problems/maximum-binary-tree/
 *
 * Given an integer array nums with no duplicates, build a maximum binary tree:
 * root is the max value; recursively build left subtree from elements before max,
 * right subtree from elements after max.
 *
 * Constraints: 1 <= nums.length <= 1000, 0 <= nums[i] <= 1000, all integers are unique
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

function getMaxIndex(arr: number[], start: number, end: number): number {
    let maxIdx = start
    for (let i = start; i <= end; i++) {
        if (arr[i] > arr[maxIdx]) maxIdx = i
    }
    return maxIdx
}

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    function helper(start: number, end: number): TreeNode | null {
        if (start > end) return null
        const maxIdx = getMaxIndex(nums, start, end)
        const node = new TreeNode(nums[maxIdx])
        node.left = helper(start, maxIdx - 1)
        node.right = helper(maxIdx + 1, end)
        return node
    }

    return helper(0, nums.length - 1)
};
