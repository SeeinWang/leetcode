# 127. Word Ladder

## 题目
给定两个单词 `beginWord` 和 `endWord`，以及一个字典 `wordList`，返回从 `beginWord` 到 `endWord` 的最短转换序列长度。每次转换只能改变一个字母，且转换后的单词必须在 `wordList` 中。如果不存在这样的转换序列，返回 `0`。

- 序列长度 = 序列中单词的个数（包含起止）
- `beginWord` 不需要在 `wordList` 中
- 所有单词长度相同，仅含小写字母

### Example
- Input: `beginWord = "hit"`, `endWord = "cog"`, `wordList = ["hot","dot","dog","lot","log","cog"]` → `5`  
  （`"hit" -> "hot" -> "dot" -> "dog" -> "cog"`）
- Input: `beginWord = "hit"`, `endWord = "cog"`, `wordList = ["hot","dot","dog","lot","log"]` → `0`

### Constraints
- `1 <= beginWord.length <= 10`
- `1 <= wordList.length <= 5000`

## 思路
BFS where each word-neighbor differs by one character; use set for O(1) lookups.

**Complexity:** Time O(M²×N), Space O(M²×N) where M=word length, N=wordList size

## Python
```python
def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
    word_set = set(wordList)
    if endWord not in word_set:
        return 0
    queue = deque([(beginWord, 1)])
    visited = {beginWord}
    while queue:
        word, length = queue.popleft()
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                neighbor = word[:i] + c + word[i+1:]
                if neighbor == endWord:
                    return length + 1
                if neighbor in word_set and neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, length + 1))
    return 0
```

## TypeScript
```typescript
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    const queue: [string, number][] = [[beginWord, 1]];
    const visited = new Set([beginWord]);
    while (queue.length) {
        const [word, length] = queue.shift()!;
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const neighbor = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (neighbor === endWord) return length + 1;
                if (wordSet.has(neighbor) && !visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, length + 1]);
                }
            }
        }
    }
    return 0;
}
```

## Go
```go
func ladderLength(beginWord string, endWord string, wordList []string) int {
    wordSet := make(map[string]bool)
    for _, w := range wordList { wordSet[w] = true }
    if !wordSet[endWord] { return 0 }
    type item struct{ word string; steps int }
    queue := []item{{beginWord, 1}}
    visited := map[string]bool{beginWord: true}
    for len(queue) > 0 {
        cur := queue[0]; queue = queue[1:]
        for i := 0; i < len(cur.word); i++ {
            for c := byte('a'); c <= 'z'; c++ {
                nb := cur.word[:i] + string(c) + cur.word[i+1:]
                if nb == endWord { return cur.steps + 1 }
                if wordSet[nb] && !visited[nb] {
                    visited[nb] = true
                    queue = append(queue, item{nb, cur.steps + 1})
                }
            }
        }
    }
    return 0
}
```
