# 981. Time Based Key-Value Store

Store (timestamp, value) list per key; binary search for largest timestamp <= query timestamp.

**Complexity:** Time O(log n) get, O(1) set, Space O(n)

## Python
```python
import bisect
from collections import defaultdict

class TimeMap:
    def __init__(self):
        self.store = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.store[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        pairs = self.store[key]
        i = bisect.bisect_right(pairs, (timestamp, chr(127))) - 1
        return pairs[i][1] if i >= 0 else ''
```

## TypeScript
```typescript
class TimeMap {
    private store: Map<string, [number, string][]> = new Map();

    set(key: string, value: string, timestamp: number): void {
        if (!this.store.has(key)) this.store.set(key, []);
        this.store.get(key)!.push([timestamp, value]);
    }

    get(key: string, timestamp: number): string {
        const pairs = this.store.get(key) ?? [];
        let lo = 0, hi = pairs.length - 1, result = '';
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (pairs[mid][0] <= timestamp) { result = pairs[mid][1]; lo = mid + 1; }
            else hi = mid - 1;
        }
        return result;
    }
}
```

## Go
```go
type TimeMap struct {
    store map[string][]struct{ t int; v string }
}

func Constructor() TimeMap { return TimeMap{store: make(map[string][]struct{ t int; v string })} }

func (tm *TimeMap) Set(key string, value string, timestamp int) {
    tm.store[key] = append(tm.store[key], struct{ t int; v string }{timestamp, value})
}

func (tm *TimeMap) Get(key string, timestamp int) string {
    pairs := tm.store[key]
    lo, hi, result := 0, len(pairs)-1, ""
    for lo <= hi {
        mid := (lo + hi) / 2
        if pairs[mid].t <= timestamp { result = pairs[mid].v; lo = mid + 1 } else { hi = mid - 1 }
    }
    return result
}
```
