# 290. Word Pattern

Two maps for bijection: char→word and word→char.

**Complexity:** Time O(n), Space O(n)

## Python
```python
def wordPattern(pattern: str, s: str) -> bool:
    words = s.split()
    if len(pattern) != len(words): return False
    c2w, w2c = {}, {}
    for c, w in zip(pattern, words):
        if c2w.get(c, w) != w or w2c.get(w, c) != c: return False
        c2w[c] = w; w2c[w] = c
    return True
```

## TypeScript
```typescript
function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const c2w = new Map<string,string>(), w2c = new Map<string,string>();
    for (let i=0; i<pattern.length; i++) {
        const c=pattern[i], w=words[i];
        if ((c2w.has(c)&&c2w.get(c)!==w)||(w2c.has(w)&&w2c.get(w)!==c)) return false;
        c2w.set(c,w); w2c.set(w,c);
    }
    return true;
}
```

## Go
```go
import "strings"

func wordPattern(pattern string, s string) bool {
    words := strings.Split(s, " ")
    if len(pattern) != len(words) { return false }
    c2w := make(map[byte]string); w2c := make(map[string]byte)
    for i:=0; i<len(pattern); i++ {
        c, w := pattern[i], words[i]
        if m,ok:=c2w[c]; ok&&m!=w { return false }
        if m,ok:=w2c[w]; ok&&m!=c { return false }
        c2w[c]=w; w2c[w]=c
    }
    return true
}
```
