# 146. LRU Cache

Doubly linked list + hash map: map stores key→node for O(1) lookup; list maintains usage order.

**Complexity:** Time O(1) per op, Space O(capacity)

## Python
```python
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache: return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)
```

## TypeScript
```typescript
class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        if (!this.cache.has(key)) return -1;
        const val = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key, value);
        if (this.cache.size > this.capacity)
            this.cache.delete(this.cache.keys().next().value);
    }
}
```

## Go
```go
import "container/list"

type LRUCache struct {
    capacity int
    list     *list.List
    cache    map[int]*list.Element
}

type entry struct{ key, val int }

func Constructor(capacity int) LRUCache {
    return LRUCache{capacity: capacity, list: list.New(), cache: make(map[int]*list.Element)}
}

func (c *LRUCache) Get(key int) int {
    if elem, ok := c.cache[key]; ok {
        c.list.MoveToFront(elem)
        return elem.Value.(*entry).val
    }
    return -1
}

func (c *LRUCache) Put(key int, value int) {
    if elem, ok := c.cache[key]; ok {
        c.list.MoveToFront(elem)
        elem.Value.(*entry).val = value
        return
    }
    elem := c.list.PushFront(&entry{key, value})
    c.cache[key] = elem
    if c.list.Len() > c.capacity {
        back := c.list.Back()
        c.list.Remove(back)
        delete(c.cache, back.Value.(*entry).key)
    }
}
```
