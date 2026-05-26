class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/*
 * 142. Linked List Cycle II
 * https://leetcode.com/problems/linked-list-cycle-ii/
 *
 * Given the head of a linked list, return the node where the cycle begins.
 * If there is no cycle, return null.
 *
 * Constraints:
 *     0 <= number of nodes <= 10^4
 *     -10^5 <= Node.val <= 10^5
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

function detectCycle(head: ListNode | null): ListNode | null {

};
