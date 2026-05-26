# 383. Ransom Note

Count magazine character frequencies, subtract ransomNote needs.

**Complexity:** Time O(n), Space O(1)

## Python
```python
from collections import Counter

def canConstruct(ransomNote: str, magazine: str) -> bool:
    mag = Counter(magazine)
    for c in ransomNote:
        if mag[c] <= 0: return False
        mag[c] -= 1
    return True
```

## TypeScript
```typescript
function canConstruct(ransomNote: string, magazine: string): boolean {
    const count = new Array(26).fill(0);
    for (const c of magazine) count[c.charCodeAt(0)-97]++;
    for (const c of ransomNote) if (--count[c.charCodeAt(0)-97] < 0) return false;
    return true;
}
```

## Go
```go
func canConstruct(ransomNote string, magazine string) bool {
    count := [26]int{}
    for _, c := range magazine { count[c-'a']++ }
    for _, c := range ransomNote { count[c-'a']--; if count[c-'a'] < 0 { return false } }
    return true
}
```
