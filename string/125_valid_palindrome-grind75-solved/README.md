# 125. Valid Palindrome

Two pointers, skip non-alphanumeric, compare case-insensitively.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def isPalindrome(s: str) -> bool:
    left, right = 0, len(s)-1
    while left < right:
        while left < right and not s[left].isalnum(): left += 1
        while left < right and not s[right].isalnum(): right -= 1
        if s[left].lower() != s[right].lower(): return False
        left += 1; right -= 1
    return True
```

## TypeScript
```typescript
function isPalindrome(s: string): boolean {
    let l=0, r=s.length-1;
    while(l<r){
        while(l<r&&!/[a-zA-Z0-9]/.test(s[l])) l++;
        while(l<r&&!/[a-zA-Z0-9]/.test(s[r])) r--;
        if(s[l].toLowerCase()!==s[r].toLowerCase()) return false;
        l++; r--;
    }
    return true;
}
```

## Go
```go
import "unicode"

func isPalindrome(s string) bool {
    runes := []rune(s)
    l, r := 0, len(runes)-1
    for l < r {
        for l<r&&!unicode.IsLetter(runes[l])&&!unicode.IsDigit(runes[l]) { l++ }
        for l<r&&!unicode.IsLetter(runes[r])&&!unicode.IsDigit(runes[r]) { r-- }
        if unicode.ToLower(runes[l])!=unicode.ToLower(runes[r]) { return false }
        l++; r--
    }
    return true
}
```
