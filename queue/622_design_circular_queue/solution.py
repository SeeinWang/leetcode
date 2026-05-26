"""
622. Design Circular Queue
https://leetcode.com/problems/design-circular-queue/

Design your implementation of the circular queue. It is a linear data structure where the
last position connects back to the first to make a circle (Ring Buffer).

Implement the MyCircularQueue class:
- MyCircularQueue(k) Initializes with size k.
- boolean enQueue(int value) Inserts into the circular queue. Return true if successful.
- boolean deQueue() Deletes an element. Return true if successful.
- int Front() Gets the front item. Return -1 if empty.
- int Rear() Gets the last item. Return -1 if empty.
- boolean isEmpty() Checks if empty.
- boolean isFull() Checks if full.

Example 1:
    Input: ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]
           [[3],[1],[2],[3],[4],[],[],[],[4],[]]
    Output: [null,true,true,true,false,3,true,true,true,4]

Constraints:
    1 <= k <= 1000
    0 <= value <= 1000
    At most 3000 calls will be made.
"""

class MyCircularQueue:

    def __init__(self, k: int):
        pass

    def enQueue(self, value: int) -> bool:
        pass

    def deQueue(self) -> bool:
        pass

    def Front(self) -> int:
        pass

    def Rear(self) -> int:
        pass

    def isEmpty(self) -> bool:
        pass

    def isFull(self) -> bool:
        pass
