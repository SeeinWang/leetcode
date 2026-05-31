// Trie (前缀树)
// 用法：
//   trie := NewTrie()
//   trie.Insert("apple")
//   trie.Search("apple")     // true
//   trie.Search("app")       // false
//   trie.StartsWith("app")   // true

package templates

type Trie struct {
	children map[byte]*Trie
	isEnd    bool
}

func NewTrie() *Trie {
	return &Trie{children: make(map[byte]*Trie)}
}

func (t *Trie) Insert(word string) {
	node := t
	for i := 0; i < len(word); i++ {
		c := word[i]
		if _, ok := node.children[c]; !ok {
			node.children[c] = NewTrie()
		}
		node = node.children[c]
	}
	node.isEnd = true
}

func (t *Trie) Search(word string) bool {
	node := t.find(word)
	return node != nil && node.isEnd
}

func (t *Trie) StartsWith(prefix string) bool {
	return t.find(prefix) != nil
}

func (t *Trie) find(s string) *Trie {
	node := t
	for i := 0; i < len(s); i++ {
		next, ok := node.children[s[i]]
		if !ok {
			return nil
		}
		node = next
	}
	return node
}
