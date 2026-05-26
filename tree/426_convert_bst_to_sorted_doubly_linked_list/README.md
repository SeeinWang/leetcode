# 426. Convert Binary Search Tree to Sorted Doubly Linked List

In-order traverse the BST while maintaining a `prev` pointer; on each visit link `prev.right = curr; curr.left = prev`. After traversal, connect head and tail to make it circular.

**Complexity:** Time O(n), Space O(h)
