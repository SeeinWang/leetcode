# 23. Merge k Sorted Lists

Divide and conquer: merge pairs of lists until one remains.

**Complexity:** Time O(n log k), Space O(log k)

## Python
```python
import heapq

def mergeKLists(lists: list) -> object:
    dummy = ListNode(0)
    curr = dummy
    heap = [(node.val, i, node) for i, node in enumerate(lists) if node]
    heapq.heapify(heap)
    while heap:
        val, i, node = heapq.heappop(heap)
        curr.next = node; curr = curr.next
        if node.next: heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next
```

## TypeScript
```typescript
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;
    function merge(l1: ListNode|null, l2: ListNode|null): ListNode|null {
        const dummy=new ListNode(0); let curr=dummy;
        while(l1&&l2){ if(l1.val<=l2.val){curr.next=l1;l1=l1.next}else{curr.next=l2;l2=l2.next}; curr=curr.next!; }
        curr.next=l1??l2; return dummy.next;
    }
    while(lists.length>1){
        const merged=[];
        for(let i=0;i<lists.length;i+=2) merged.push(merge(lists[i],lists[i+1]??null));
        lists=merged;
    }
    return lists[0];
}
```

## Go
```go
func mergeKLists(lists []*ListNode) *ListNode {
    if len(lists)==0 { return nil }
    var merge func(l1,l2 *ListNode) *ListNode
    merge = func(l1,l2 *ListNode) *ListNode {
        dummy:=&ListNode{}; curr:=dummy
        for l1!=nil&&l2!=nil { if l1.Val<=l2.Val{curr.Next=l1;l1=l1.Next}else{curr.Next=l2;l2=l2.Next}; curr=curr.Next }
        if l1!=nil{curr.Next=l1}else{curr.Next=l2}; return dummy.Next
    }
    for len(lists)>1 {
        merged:=[]*ListNode{}
        for i:=0;i<len(lists);i+=2 {
            if i+1<len(lists){merged=append(merged,merge(lists[i],lists[i+1]))}else{merged=append(merged,lists[i])}
        }
        lists=merged
    }
    return lists[0]
}
```
