# 443. String Compression

Two pointers: read scans ahead, write records compressed result.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def compress(chars: list[str]) -> int:
    write = read = 0
    while read < len(chars):
        char = chars[read]; count = 0
        while read < len(chars) and chars[read] == char: read += 1; count += 1
        chars[write] = char; write += 1
        if count > 1:
            for d in str(count): chars[write] = d; write += 1
    return write
```

## TypeScript
```typescript
function compress(chars: string[]): number {
    let write=0, read=0;
    while(read<chars.length){
        const char=chars[read]; let count=0;
        while(read<chars.length&&chars[read]===char){ read++; count++; }
        chars[write++]=char;
        if(count>1) for(const d of String(count)) chars[write++]=d;
    }
    return write;
}
```

## Go
```go
import "strconv"

func compress(chars []byte) int {
    write, read := 0, 0
    for read < len(chars) {
        char := chars[read]; count := 0
        for read<len(chars)&&chars[read]==char { read++; count++ }
        chars[write]=char; write++
        if count>1 { for _,d:=range strconv.Itoa(count) { chars[write]=byte(d); write++ } }
    }
    return write
}
```
