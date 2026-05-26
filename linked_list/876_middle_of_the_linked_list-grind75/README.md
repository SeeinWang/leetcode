# 876. Middle of the Linked List

Fast/slow pointer: when fast reaches end, slow is at middle.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def middleNode(head: ListNode) -> ListNode:
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
```

## TypeScript
```typescript
function middleNode(head: ListNode | null): ListNode | null {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    return slow;
}
```

## Go
```go
func middleNode(head *ListNode) *ListNode {
    slow, fast := head, head
    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }
    return slow
}
```
