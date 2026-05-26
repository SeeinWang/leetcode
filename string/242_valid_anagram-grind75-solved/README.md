# 242. Valid Anagram

Count character frequencies in s, subtract t's needs.

**Complexity:** Time O(n), Space O(1)

## Python
```python
from collections import Counter

def isAnagram(s: str, t: str) -> bool:
    return Counter(s) == Counter(t)
```

## TypeScript
```typescript
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    for (let i=0; i<s.length; i++) { count[s.charCodeAt(i)-97]++; count[t.charCodeAt(i)-97]--; }
    return count.every(c => c === 0);
}
```

## Go
```go
func isAnagram(s string, t string) bool {
    if len(s) != len(t) { return false }
    count := [26]int{}
    for i := 0; i < len(s); i++ { count[s[i]-'a']++; count[t[i]-'a']-- }
    for _, c := range count { if c != 0 { return false } }
    return true
}
```
