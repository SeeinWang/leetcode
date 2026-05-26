# 203. Remove Linked List Elements

Use a dummy head node to simplify edge cases, iterate and skip nodes with matching value.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def removeElements(head, val):
    dummy = ListNode(0, head)
    curr = dummy
    while curr.next:
        if curr.next.val == val:
            curr.next = curr.next.next
        else:
            curr = curr.next
    return dummy.next
```

## TypeScript
```typescript
function removeElements(head: ListNode | null, val: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let curr = dummy;
    while (curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return dummy.next;
}
```

## Go
```go
func removeElements(head *ListNode, val int) *ListNode {
    dummy := &ListNode{Next: head}
    curr := dummy
    for curr.Next != nil {
        if curr.Next.Val == val {
            curr.Next = curr.Next.Next
        } else {
            curr = curr.Next
        }
    }
    return dummy.Next
}
```
