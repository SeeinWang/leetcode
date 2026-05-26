# 21. Merge Two Sorted Lists

Use a dummy head and merge by comparing values.

**Complexity:** Time O(n+m), Space O(1)

## Python
```python
def mergeTwoLists(list1: ListNode, list2: ListNode) -> ListNode:
    dummy = ListNode(0)
    curr = dummy
    while list1 and list2:
        if list1.val <= list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next
    curr.next = list1 or list2
    return dummy.next
```

## TypeScript
```typescript
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let curr = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) { curr.next = list1; list1 = list1.next; }
        else { curr.next = list2; list2 = list2.next; }
        curr = curr.next!;
    }
    curr.next = list1 ?? list2;
    return dummy.next;
}
```

## Go
```go
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    dummy := &ListNode{}
    curr := dummy
    for list1 != nil && list2 != nil {
        if list1.Val <= list2.Val { curr.Next = list1; list1 = list1.Next } else { curr.Next = list2; list2 = list2.Next }
        curr = curr.Next
    }
    if list1 != nil { curr.Next = list1 } else { curr.Next = list2 }
    return dummy.Next
}
```
