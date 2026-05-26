# 707. Design Linked List

Use a dummy head node and track size; traverse to index for get/add/delete operations.

**Complexity:** Time O(n) for index-based ops, Space O(n)

## Python
```python
class MyLinkedList:
    def __init__(self):
        self.dummy = ListNode(0)
        self.size = 0

    def get(self, index: int) -> int:
        if index < 0 or index >= self.size:
            return -1
        curr = self.dummy.next
        for _ in range(index):
            curr = curr.next
        return curr.val

    def addAtHead(self, val: int) -> None:
        self.addAtIndex(0, val)

    def addAtTail(self, val: int) -> None:
        self.addAtIndex(self.size, val)

    def addAtIndex(self, index: int, val: int) -> None:
        if index > self.size:
            return
        curr = self.dummy
        for _ in range(index):
            curr = curr.next
        curr.next = ListNode(val, curr.next)
        self.size += 1

    def deleteAtIndex(self, index: int) -> None:
        if index < 0 or index >= self.size:
            return
        curr = self.dummy
        for _ in range(index):
            curr = curr.next
        curr.next = curr.next.next
        self.size -= 1
```

## TypeScript
```typescript
class MyLinkedList {
    private dummy: ListNode;
    private size: number;

    constructor() {
        this.dummy = new ListNode(0);
        this.size = 0;
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;
        let curr = this.dummy.next!;
        for (let i = 0; i < index; i++) curr = curr.next!;
        return curr.val;
    }

    addAtHead(val: number): void { this.addAtIndex(0, val); }
    addAtTail(val: number): void { this.addAtIndex(this.size, val); }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) return;
        let curr: ListNode = this.dummy;
        for (let i = 0; i < index; i++) curr = curr.next!;
        curr.next = new ListNode(val, curr.next);
        this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return;
        let curr: ListNode = this.dummy;
        for (let i = 0; i < index; i++) curr = curr.next!;
        curr.next = curr.next!.next;
        this.size--;
    }
}
```

## Go
```go
type MyLinkedList struct {
    dummy *ListNode
    size  int
}

func Constructor() MyLinkedList {
    return MyLinkedList{dummy: &ListNode{}}
}

func (this *MyLinkedList) Get(index int) int {
    if index < 0 || index >= this.size { return -1 }
    curr := this.dummy.Next
    for i := 0; i < index; i++ { curr = curr.Next }
    return curr.Val
}

func (this *MyLinkedList) AddAtHead(val int) { this.AddAtIndex(0, val) }
func (this *MyLinkedList) AddAtTail(val int) { this.AddAtIndex(this.size, val) }

func (this *MyLinkedList) AddAtIndex(index int, val int) {
    if index > this.size { return }
    curr := this.dummy
    for i := 0; i < index; i++ { curr = curr.Next }
    curr.Next = &ListNode{Val: val, Next: curr.Next}
    this.size++
}

func (this *MyLinkedList) DeleteAtIndex(index int) {
    if index < 0 || index >= this.size { return }
    curr := this.dummy
    for i := 0; i < index; i++ { curr = curr.Next }
    curr.Next = curr.Next.Next
    this.size--
}
```
