# 438. Find All Anagrams in a String

Sliding window of size len(p): maintain character counts, add index when window matches p's counts.

**Complexity:** Time O(n), Space O(1)

## Python
```python
from collections import Counter

def findAnagrams(s: str, p: str) -> list[int]:
    if len(p) > len(s): return []
    p_count = Counter(p)
    window = Counter(s[:len(p)])
    result = [0] if window == p_count else []
    for i in range(len(p), len(s)):
        window[s[i]] += 1
        left = s[i - len(p)]
        window[left] -= 1
        if window[left] == 0: del window[left]
        if window == p_count: result.append(i - len(p) + 1)
    return result
```

## TypeScript
```typescript
function findAnagrams(s: string, p: string): number[] {
    if (p.length > s.length) return [];
    const pCount = new Array(26).fill(0);
    const wCount = new Array(26).fill(0);
    for (const c of p) pCount[c.charCodeAt(0) - 97]++;
    for (let i = 0; i < p.length; i++) wCount[s.charCodeAt(i) - 97]++;
    const result: number[] = [];
    const eq = () => pCount.every((v, i) => v === wCount[i]);
    if (eq()) result.push(0);
    for (let i = p.length; i < s.length; i++) {
        wCount[s.charCodeAt(i) - 97]++;
        wCount[s.charCodeAt(i - p.length) - 97]--;
        if (eq()) result.push(i - p.length + 1);
    }
    return result;
}
```

## Go
```go
func findAnagrams(s string, p string) []int {
    if len(p) > len(s) { return nil }
    var pCount, wCount [26]int
    for _, c := range p { pCount[c-'a']++ }
    for i := 0; i < len(p); i++ { wCount[s[i]-'a']++ }
    result := []int{}
    if pCount == wCount { result = append(result, 0) }
    for i := len(p); i < len(s); i++ {
        wCount[s[i]-'a']++
        wCount[s[i-len(p)]-'a']--
        if pCount == wCount { result = append(result, i-len(p)+1) }
    }
    return result
}
```
