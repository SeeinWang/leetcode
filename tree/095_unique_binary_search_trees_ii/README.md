# 95. Unique Binary Search Trees II

**核心思路：分治构造**

对于区间 `[start, end]`，枚举每个值 `i` 作为根：
- 左子树 = 用 `[start, i-1]` 递归构造出的**所有可能**
- 右子树 = 用 `[i+1, end]` 递归构造出的**所有可能**
- 笛卡尔积：每个左子树 × 每个右子树 → 都是一种合法 BST

**Complexity:** Time O(n · Catalan(n))，Space O(Catalan(n))（结果本身就这么大）

## TypeScript
```typescript
function generateTrees(n: number): Array<TreeNode | null> {
    const build = (start: number, end: number): Array<TreeNode | null> => {
        if (start > end) return [null];
        const res: Array<TreeNode | null> = [];
        for (let i = start; i <= end; i++) {
            const lefts = build(start, i - 1);
            const rights = build(i + 1, end);
            for (const l of lefts) {
                for (const r of rights) {
                    const root = new TreeNode(i);
                    root.left = l;
                    root.right = r;
                    res.push(root);
                }
            }
        }
        return res;
    };
    return n === 0 ? [] : build(1, n);
}
```

## Python
```python
def generateTrees(n: int):
    def build(start, end):
        if start > end:
            return [None]
        res = []
        for i in range(start, end + 1):
            for l in build(start, i - 1):
                for r in build(i + 1, end):
                    node = TreeNode(i, l, r)
                    res.append(node)
        return res
    return build(1, n) if n else []
```

## Go
```go
func generateTrees(n int) []*TreeNode {
    var build func(start, end int) []*TreeNode
    build = func(start, end int) []*TreeNode {
        if start > end {
            return []*TreeNode{nil}
        }
        var res []*TreeNode
        for i := start; i <= end; i++ {
            lefts := build(start, i-1)
            rights := build(i+1, end)
            for _, l := range lefts {
                for _, r := range rights {
                    res = append(res, &TreeNode{Val: i, Left: l, Right: r})
                }
            }
        }
        return res
    }
    if n == 0 { return nil }
    return build(1, n)
}
```

## 关键点

1. **base case 返回 `[null]` 而不是 `[]`**
   - 空区间也算"一种结果"（就是没有子树），这样外层笛卡尔积才会执行一次
   - 如果返回 `[]`，笛卡尔积就空了，导致整个组合丢失

2. **跟 96 的关系**
   - 96 只问数量：`G(n) = ΣG(i-1)·G(n-i)`，卡特兰数
   - 95 要构造真树：把 96 的"乘法"换成"笛卡尔积"
   - 想清楚 95 之后，96 就是把 95 的 `for l × for r` 替换成 `len(lefts) × len(rights)`

3. **节点不共享 vs 共享**
   - 上面的写法**子树是共享的**（多棵树指向同一个左子树节点）
   - LeetCode 接受这种写法，但严格"独立树"应该深拷贝子树
   - 面试中可以主动提一句，加分

4. **记忆化的陷阱**
   - 子问题只取决于"区间长度"（不是具体的 start/end），可以加 memo
   - 但取出来的子树要**整体深拷贝并调整 val**，因为不同区间值不同
   - 通常不优化，因为结果总数本身就 O(Catalan(n))

## 卡特兰数（顺便记住）
```
1, 1, 2, 5, 14, 42, 132, 429, 1430, ...
C(n) = C(2n, n) / (n+1)
```
n=8 时 1430 棵树，所以题目限制 n ≤ 8。
