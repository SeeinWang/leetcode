# 24. Swap Nodes in Pairs

Dummy head + iterate: for each pair, rewire the three pointers to swap adjacent nodes.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def swapPairs(head):
    dummy = ListNode(0, head)
    prev = dummy
    while prev.next and prev.next.next:
        a, b = prev.next, prev.next.next
        prev.next = b
        a.next = b.next
        b.next = a
        prev = a
    return dummy.next
```

## TypeScript
```typescript
function swapPairs(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head);
    let prev: ListNode = dummy;
    while (prev.next !== null && prev.next.next !== null) {
        const a = prev.next, b = prev.next.next;
        prev.next = b;
        a.next = b.next;
        b.next = a;
        prev = a;
    }
    return dummy.next;
}
```

## Go
```go
func swapPairs(head *ListNode) *ListNode {
    dummy := &ListNode{Next: head}
    prev := dummy
    for prev.Next != nil && prev.Next.Next != nil {
        a, b := prev.Next, prev.Next.Next
        prev.Next = b
        a.Next = b.Next
        b.Next = a
        prev = a
    }
    return dummy.Next
}
```
