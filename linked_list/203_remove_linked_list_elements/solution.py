"""
203. Remove Linked List Elements
https://leetcode.com/problems/remove-linked-list-elements/

Given the head of a linked list and an integer val, remove all the nodes
of the linked list that have Node.val == val, and return the new head.

Example:
    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]

Constraints:
    0 <= number of nodes <= 10^4
    1 <= Node.val <= 50
    0 <= val <= 50
"""

from typing import Optional

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        pass
