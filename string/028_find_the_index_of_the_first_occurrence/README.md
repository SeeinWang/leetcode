# 28. Find the Index of the First Occurrence in a String

KMP algorithm: build failure function for needle, then match against haystack in O(m+n).

**Complexity:** Time O(m+n), Space O(m)

## Python
```python
def strStr(haystack: str, needle: str) -> int:
    if not needle:
        return 0
    # Build KMP failure table
    lps = [0] * len(needle)
    length, i = 0, 1
    while i < len(needle):
        if needle[i] == needle[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length:
            length = lps[length - 1]
        else:
            i += 1
    # Match
    i = j = 0
    while i < len(haystack):
        if haystack[i] == needle[j]:
            i += 1; j += 1
        if j == len(needle):
            return i - j
        elif i < len(haystack) and haystack[i] != needle[j]:
            j = lps[j - 1] if j else 0
            if not j: i += 1
    return -1
```

## TypeScript
```typescript
function strStr(haystack: string, needle: string): number {
    if (!needle) return 0;
    const lps = new Array(needle.length).fill(0);
    let length = 0, i = 1;
    while (i < needle.length) {
        if (needle[i] === needle[length]) { lps[i++] = ++length; }
        else if (length) { length = lps[length - 1]; }
        else { i++; }
    }
    let h = 0, n = 0;
    while (h < haystack.length) {
        if (haystack[h] === needle[n]) { h++; n++; }
        if (n === needle.length) return h - n;
        else if (h < haystack.length && haystack[h] !== needle[n])
            n = n ? lps[n - 1] : (h++, 0);
    }
    return -1;
}
```

## Go
```go
func strStr(haystack string, needle string) int {
    if len(needle) == 0 { return 0 }
    lps := make([]int, len(needle))
    length, i := 0, 1
    for i < len(needle) {
        if needle[i] == needle[length] {
            length++; lps[i] = length; i++
        } else if length > 0 {
            length = lps[length-1]
        } else {
            i++
        }
    }
    h, n := 0, 0
    for h < len(haystack) {
        if haystack[h] == needle[n] { h++; n++ }
        if n == len(needle) { return h - n }
        if h < len(haystack) && haystack[h] != needle[n] {
            if n > 0 { n = lps[n-1] } else { h++ }
        }
    }
    return -1
}
```
