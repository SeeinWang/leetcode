class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/*
 * 203. Remove Linked List Elements
 * https://leetcode.com/problems/remove-linked-list-elements/
 *
 * Given the head of a linked list and an integer val, remove all the nodes
 * of the linked list that have Node.val == val, and return the new head.
 *
 * Example 1:
 *     Input: head = [1,2,6,3,4,5,6], val = 6
 *     Output: [1,2,3,4,5]
 *
 * Constraints:
 *     0 <= number of nodes <= 10^4
 *     1 <= Node.val <= 50
 *     0 <= val <= 50
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {

};
