# 49. Group Anagrams

Use sorted string as hashmap key.

**Complexity:** Time O(n * k log k), Space O(n*k)

## Python
```python
from collections import defaultdict

def groupAnagrams(strs: list[str]) -> list[list[str]]:
    groups = defaultdict(list)
    for s in strs: groups[tuple(sorted(s))].append(s)
    return list(groups.values())
```

## TypeScript
```typescript
function groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>();
    for (const s of strs) {
        const key = s.split('').sort().join('');
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key)!.push(s);
    }
    return Array.from(groups.values());
}
```

## Go
```go
import "sort"

func groupAnagrams(strs []string) [][]string {
    groups := make(map[string][]string)
    for _, s := range strs {
        b := []byte(s); sort.Slice(b, func(i,j int) bool { return b[i]<b[j] })
        key := string(b); groups[key] = append(groups[key], s)
    }
    result := make([][]string, 0, len(groups))
    for _, v := range groups { result = append(result, v) }
    return result
}
```
