# 3. Longest Substring Without Repeating Characters

Sliding window with hashmap tracking last position of each character.

**Complexity:** Time O(n), Space O(min(n, charset))

## Python
```python
def lengthOfLongestSubstring(s: str) -> int:
    char_index = {}
    max_len = left = 0
    for right, char in enumerate(s):
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
        char_index[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len
```

## TypeScript
```typescript
function lengthOfLongestSubstring(s: string): number {
    const charIndex = new Map<string,number>();
    let maxLen=0, left=0;
    for (let right=0; right<s.length; right++) {
        const c=s[right];
        if (charIndex.has(c)&&charIndex.get(c)!>=left) left=charIndex.get(c)!+1;
        charIndex.set(c, right);
        maxLen=Math.max(maxLen, right-left+1);
    }
    return maxLen;
}
```

## Go
```go
func lengthOfLongestSubstring(s string) int {
    charIndex := make(map[byte]int)
    maxLen, left := 0, 0
    for right:=0; right<len(s); right++ {
        if idx, ok := charIndex[s[right]]; ok && idx>=left { left=idx+1 }
        charIndex[s[right]]=right
        if right-left+1>maxLen { maxLen=right-left+1 }
    }
    return maxLen
}
```
