# 133. Clone Graph

## 题目
给定一个连通无向图中一个节点的引用，返回该图的**深拷贝**（克隆）。图中每个节点包含一个值 `val (int)` 和一个邻居列表 `neighbors (List[Node])`。

### Example
- Input: `adjList = [[2,4],[1,3],[2,4],[1,3]]` → `[[2,4],[1,3],[2,4],[1,3]]`
- Input: `adjList = [[]]` → `[[]]`（仅一个节点，无邻居）
- Input: `adjList = []` → `[]`（空图）

### Constraints
- 节点数范围 `[0, 100]`
- `1 <= Node.val <= 100`，节点值唯一
- 图为无向，无重复边，无自环

## 思路
DFS with hashmap to track cloned nodes and avoid cycles.

**Complexity:** Time O(V+E), Space O(V)

## Python
```python
def cloneGraph(node):
    if not node: return None
    cloned = {}
    def dfs(n):
        if n in cloned: return cloned[n]
        clone = Node(n.val)
        cloned[n] = clone
        for neighbor in n.neighbors:
            clone.neighbors.append(dfs(neighbor))
        return clone
    return dfs(node)
```

## TypeScript
```typescript
function cloneGraph(node: _Node | null): _Node | null {
    if (!node) return null;
    const cloned = new Map<_Node, _Node>();
    function dfs(n: _Node): _Node {
        if (cloned.has(n)) return cloned.get(n)!;
        const clone = new _Node(n.val);
        cloned.set(n, clone);
        for (const nb of n.neighbors) clone.neighbors.push(dfs(nb));
        return clone;
    }
    return dfs(node);
}
```

## Go
```go
func cloneGraph(node *Node) *Node {
    if node == nil { return nil }
    cloned := make(map[*Node]*Node)
    var dfs func(*Node) *Node
    dfs = func(n *Node) *Node {
        if c, ok := cloned[n]; ok { return c }
        clone := &Node{Val: n.Val}
        cloned[n] = clone
        for _, nb := range n.Neighbors { clone.Neighbors = append(clone.Neighbors, dfs(nb)) }
        return clone
    }
    return dfs(node)
}
```
