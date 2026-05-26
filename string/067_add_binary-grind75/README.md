# 67. Add Binary

Simulate addition from right to left, tracking carry; build result in reverse.

**Complexity:** Time O(max(m,n)), Space O(max(m,n))

## Python
```python
def addBinary(a: str, b: str) -> str:
    i, j, carry = len(a) - 1, len(b) - 1, 0
    result = []
    while i >= 0 or j >= 0 or carry:
        total = carry
        if i >= 0: total += int(a[i]); i -= 1
        if j >= 0: total += int(b[j]); j -= 1
        result.append(str(total % 2))
        carry = total // 2
    return ''.join(reversed(result))
```

## TypeScript
```typescript
function addBinary(a: string, b: string): string {
    let i = a.length - 1, j = b.length - 1, carry = 0;
    const result: string[] = [];
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += Number(a[i--]);
        if (j >= 0) sum += Number(b[j--]);
        result.push(String(sum % 2));
        carry = Math.floor(sum / 2);
    }
    return result.reverse().join('');
}
```

## Go
```go
func addBinary(a string, b string) string {
    i, j, carry := len(a)-1, len(b)-1, 0
    result := []byte{}
    for i >= 0 || j >= 0 || carry > 0 {
        sum := carry
        if i >= 0 { sum += int(a[i] - '0'); i-- }
        if j >= 0 { sum += int(b[j] - '0'); j-- }
        result = append([]byte{byte('0' + sum%2)}, result...)
        carry = sum / 2
    }
    return string(result)
}
```
