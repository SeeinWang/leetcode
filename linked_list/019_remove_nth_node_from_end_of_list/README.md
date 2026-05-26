# 19. Remove Nth Node From End of List

Two pointers with gap n: when fast reaches end, slow is just before target.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def removeNthFromEnd(head: ListNode, n: int) -> ListNode:
    dummy = ListNode(0, head)
    fast, slow = dummy, dummy
    for _ in range(n + 1):
        fast = fast.next
    while fast:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return dummy.next
```

## TypeScript
```typescript
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let fast: ListNode | null = dummy;
    let slow: ListNode | null = dummy;
    for (let i = 0; i <= n; i++) fast = fast!.next;
    while (fast !== null) { fast = fast.next; slow = slow!.next; }
    slow!.next = slow!.next!.next;
    return dummy.next;
}
```

## Go
```go
func removeNthFromEnd(head *ListNode, n int) *ListNode {
    dummy := &ListNode{Next: head}
    fast, slow := dummy, dummy
    for i := 0; i <= n; i++ { fast = fast.Next }
    for fast != nil { fast = fast.Next; slow = slow.Next }
    slow.Next = slow.Next.Next
    return dummy.Next
}
```
