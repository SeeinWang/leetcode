class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/*
 * 23. Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * Merge k sorted linked lists into one sorted list.
 *
 * Example 1: lists=[[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6]
 * Constraints: 0 <= k <= 10^4, sum of lengths <= 10^4
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

// Min-heap approach. Time: O(N log k), Space: O(k)

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

    function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        if (l1 == null) return l2
        if (l2 == null) return l1
        const dummy = new ListNode(0)
        let cur = dummy
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                cur.next = l1
                l1 = l1.next
            } else {
                cur.next = l2
                l2 = l2.next
            }
            cur = cur.next
        }
        if (l1) {
            cur.next = l1
        }
        if (l2) {
            cur.next = l2
        }

        return dummy.next
    }

    function partion(start: number, end: number): ListNode | null {
        if (start === end) return lists[start]
        if (start < end) {
            const mid = start + Math.floor((end - start) / 2)
            const l1 = partion(start, mid)
            const l2 = partion(mid + 1, end)
            return merge(l1, l2)
        }
        return null
    }
    return partion(0, lists.length - 1)
};
