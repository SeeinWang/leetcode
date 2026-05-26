# 160. Intersection of Two Linked Lists

Two pointers: when one reaches the end, redirect to the other list's head; they meet at intersection.

**Complexity:** Time O(m+n), Space O(1)

## Python
```python
def getIntersectionNode(headA, headB):
    a, b = headA, headB
    while a != b:
        a = a.next if a else headB
        b = b.next if b else headA
    return a
```

## TypeScript
```typescript
function getIntersectionNode(headA: ListNode, headB: ListNode): ListNode | null {
    let a: ListNode | null = headA, b: ListNode | null = headB;
    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
}
```

## Go
```go
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    a, b := headA, headB
    for a != b {
        if a != nil { a = a.Next } else { a = headB }
        if b != nil { b = b.Next } else { b = headA }
    }
    return a
}
```
