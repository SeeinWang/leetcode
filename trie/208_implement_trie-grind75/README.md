# 208. Implement Trie (Prefix Tree)

Each node stores a children map and isEnd flag; traverse character by character for all operations.

**Complexity:** Time O(m) per op where m=word length, Space O(m×n) total

## Python
```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self.root
        for c in word:
            if c not in node.children: return False
            node = node.children[c]
        return node.is_end

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for c in prefix:
            if c not in node.children: return False
            node = node.children[c]
        return True
```

## TypeScript
```typescript
class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEnd = false;
}

class Trie {
    private root = new TrieNode();

    insert(word: string): void {
        let node = this.root;
        for (const c of word) {
            if (!node.children.has(c)) node.children.set(c, new TrieNode());
            node = node.children.get(c)!;
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (const c of word) {
            if (!node.children.has(c)) return false;
            node = node.children.get(c)!;
        }
        return node.isEnd;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const c of prefix) {
            if (!node.children.has(c)) return false;
            node = node.children.get(c)!;
        }
        return true;
    }
}
```

## Go
```go
type TrieNode struct {
    children [26]*TrieNode
    isEnd    bool
}

type Trie struct {
    root *TrieNode
}

func Constructor() Trie { return Trie{root: &TrieNode{}} }

func (t *Trie) Insert(word string) {
    node := t.root
    for _, c := range word {
        i := c - 'a'
        if node.children[i] == nil { node.children[i] = &TrieNode{} }
        node = node.children[i]
    }
    node.isEnd = true
}

func (t *Trie) Search(word string) bool {
    node := t.root
    for _, c := range word {
        i := c - 'a'
        if node.children[i] == nil { return false }
        node = node.children[i]
    }
    return node.isEnd
}

func (t *Trie) StartsWith(prefix string) bool {
    node := t.root
    for _, c := range prefix {
        i := c - 'a'
        if node.children[i] == nil { return false }
        node = node.children[i]
    }
    return true
}
```
