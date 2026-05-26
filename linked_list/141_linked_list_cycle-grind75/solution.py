"""
141. Linked List Cycle
https://leetcode.com/problems/linked-list-cycle/

Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle if some node can be reached again by continuously following the next pointer.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
    Input: head = [3,2,0,-4], pos = 1
    Output: true

Example 2:
    Input: head = [1,2], pos = 0
    Output: true

Example 3:
    Input: head = [1], pos = -1
    Output: false

Constraints:
    The number of the nodes in the list is in the range [0, 10^4].
    -10^5 <= Node.val <= 10^5
    pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) memory?
"""

from typing import Optional

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        pass
