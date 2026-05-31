# Templates

通用数据结构模板，刷题直接 copy-paste。

## 索引

| 数据结构 | TS | Py | Go | 用途 |
|----------|----|----|----|------|
| **MinHeap / 优先队列** | [min_heap.ts](min_heap.ts) | `heapq` 内置 | `container/heap` 内置 | Dijkstra, Top K, 调度类 |
| **Union-Find / DSU** | [union_find.ts](union_find.ts) | [union_find.py](union_find.py) | [union_find.go](union_find.go) | 连通分量, 环检测, 合并集合 |
| **Trie / 前缀树** | [trie.ts](trie.ts) | [trie.py](trie.py) | [trie.go](trie.go) | 单词搜索, 自动补全, 前缀匹配 |
| **Monotonic Queue / 单调队列** | [monotonic_queue.ts](monotonic_queue.ts) | [monotonic_queue.py](monotonic_queue.py) | [monotonic_queue.go](monotonic_queue.go) | 定长窗口最值, 前缀和最短区间, DP 优化 |
| **Monotonic Stack / 单调栈** | [monotonic_stack.ts](monotonic_stack.ts) | [monotonic_stack.py](monotonic_stack.py) | [monotonic_stack.go](monotonic_stack.go) | 下一个更大/更小元素, 柱状图最大矩形, 接雨水 |

---

## 语言备注

### TypeScript
- **痛点：标准库没有堆**。必须自带 `MinHeap` 类。
- `Map` / `Set` 都是内置的，可以放心用。
- 数组当队列：`shift()` 是 O(n)，大数据用 `let head = 0; while (head < queue.length) { ... queue[head++] }` 替代。

### Python
- `heapq` 是 min-heap，要 max-heap 把值取负 `heappush(heap, -x)`。
- `heapq.heappush(heap, (priority, item))` —— tuple 比较有坑：item 不能是同类型不可比较的对象（如 `ListNode`），加个 counter 打破平局：`(priority, counter, item)`。
- `collections.deque` 双端队列 O(1)。
- `collections.defaultdict(list)` 自动初始化。

### Go
- `container/heap` 用起来啰嗦，要实现 `heap.Interface`（5 个方法）。需要时直接抄 `min_heap` 模板示例（在 743 README 里有）。
- map 不能用 slice 当 key，但 array `[2]int` 可以。
- 数组当队列：`queue = queue[1:]` 不会立即释放底层数组内存，长跑可能有问题，必要时复制。

---

## 何时用哪个

### MinHeap / 优先队列
- **Top K**：215 Kth Largest, 347 Top K Frequent, 973 K Closest Points
- **Dijkstra**：743, 787, 1631, 778, 1514
- **Merge K**：23 Merge K Sorted Lists
- **Median**：295 Find Median from Data Stream（min + max 双堆）

### Union-Find
- **连通分量数**：323, 547
- **判环 / 判树**：261, 684 Redundant Connection
- **合并集合**：721 Accounts Merge, 990 Equations
- **岛屿变体**：200（也可 DFS），305 Number of Islands II（动态加岛）

### Trie
- **前缀查询**：208 Implement Trie, 211 Add and Search Word
- **单词搜索**：212 Word Search II（Trie + DFS 剪枝）
- **最长公共前缀**：14（Trie 不是最优但能做）
- **位运算**：421 Max XOR（二进制 Trie）

### Monotonic Queue
- **定长窗口最值**：239 Sliding Window Maximum（递减队列，队首即最大值）
- **前缀和最短区间**：862 Shortest Subarray with Sum at Least K（含负数，递增队列）
- **DP 优化**：1696 Jump Game VI, 918 Maximum Sum Circular Subarray
- **信号**：「区间和 ≥ K 求最短」+ 含负数 → 前缀和 + 单调队列

### Monotonic Stack
- **下一个更大元素**：496 Next Greater Element I（模板题），503（循环数组，跑 2n）
- **等多少天 / 距离**：739 Daily Temperatures（递减栈存下标，弹出即出答案）
- **柱状图最大矩形**：84 Largest Rectangle in Histogram（递增栈 + 哨兵 0）
- **接雨水**：42 Trapping Rain Water（递减栈逐层积水；或双指针 O(1) 空间）
- **信号**：「对每个元素找右边第一个更大/更小」→ 单调栈；递减栈找更大，递增栈找更小
