# 409. Longest Palindrome

Count frequencies; add all even-count chars, floor odd-count chars to even, add 1 if any odd count exists.

**Complexity:** Time O(n), Space O(1)

## Python
```python
from collections import Counter

def longestPalindrome(s: str) -> int:
    counts = Counter(s)
    length = 0
    has_odd = False
    for count in counts.values():
        length += count if count % 2 == 0 else count - 1
        if count % 2 == 1:
            has_odd = True
    return length + (1 if has_odd else 0)
```

## TypeScript
```typescript
function longestPalindrome(s: string): number {
    const counts = new Map<string, number>();
    for (const c of s) counts.set(c, (counts.get(c) ?? 0) + 1);
    let length = 0, hasOdd = false;
    for (const count of counts.values()) {
        length += count % 2 === 0 ? count : count - 1;
        if (count % 2 === 1) hasOdd = true;
    }
    return length + (hasOdd ? 1 : 0);
}
```

## Go
```go
func longestPalindrome(s string) int {
    counts := make(map[rune]int)
    for _, c := range s { counts[c]++ }
    length, hasOdd := 0, false
    for _, count := range counts {
        length += count / 2 * 2
        if count%2 == 1 { hasOdd = true }
    }
    if hasOdd { length++ }
    return length
}
```
