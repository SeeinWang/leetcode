// Trie (前缀树)
// 用法：
//   const trie = new Trie()
//   trie.insert("apple")
//   trie.search("apple")     // true
//   trie.search("app")       // false（不是完整单词）
//   trie.startsWith("app")   // true

class TrieNode {
    children: Map<string, TrieNode> = new Map()
    isEnd: boolean = false
}

class Trie {
    private root: TrieNode = new TrieNode()

    insert(word: string): void {
        let node = this.root
        for (const c of word) {
            if (!node.children.has(c)) node.children.set(c, new TrieNode())
            node = node.children.get(c)!
        }
        node.isEnd = true
    }

    search(word: string): boolean {
        const node = this.findNode(word)
        return node !== null && node.isEnd
    }

    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null
    }

    private findNode(s: string): TrieNode | null {
        let node = this.root
        for (const c of s) {
            const next = node.children.get(c)
            if (!next) return null
            node = next
        }
        return node
    }
}
