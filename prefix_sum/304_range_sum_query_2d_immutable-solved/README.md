# 304. Range Sum Query 2D - Immutable

**2D 前缀和** —— 一维前缀和的二维版本。预处理 O(m·n)，每次区域查询 O(1)。

## 核心思路

定义 `pre[i][j]` = 左上角 `(0,0)` 到 `(i-1, j-1)` 这个矩形所有元素的和（用 `i,j` 从 1 开始可以省去边界判断）。

**构建递推**：
```
pre[i][j] = pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1] + matrix[i-1][j-1]
```

**查询 `(r1,c1)` 到 `(r2,c2)` 的矩形和**（容斥原理）：
```
sum = pre[r2+1][c2+1] - pre[r1][c2+1] - pre[r2+1][c1] + pre[r1][c1]
```

## 直觉：容斥（Inclusion-Exclusion）

想象四个"以原点为左上角"的大矩形：

```
        c1      c2+1
    ┌─────────────────┐
    │   A   │    B    │  r1
    ├───────┼─────────┤
    │   C   │ target  │  r2+1
    └───────┴─────────┘
```

- `pre[r2+1][c2+1]` = A + B + C + target（最大的矩形）
- `pre[r1][c2+1]`   = A + B（上面一条）
- `pre[r2+1][c1]`   = A + C（左边一条）
- `pre[r1][c1]`     = A（左上角小矩形）

**target = 大 - 上 - 左 + 左上**（左上角被减了两次，要加回来一次）

## Python
```python
class NumMatrix:
    def __init__(self, matrix: list[list[int]]):
        m, n = len(matrix), len(matrix[0])
        self.pre = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m):
            for j in range(n):
                self.pre[i+1][j+1] = (
                    self.pre[i][j+1] + self.pre[i+1][j]
                    - self.pre[i][j] + matrix[i][j]
                )

    def sumRegion(self, r1: int, c1: int, r2: int, c2: int) -> int:
        return (
            self.pre[r2+1][c2+1] - self.pre[r1][c2+1]
            - self.pre[r2+1][c1] + self.pre[r1][c1]
        )
```

## TypeScript
```typescript
class NumMatrix {
    private pre: number[][];

    constructor(matrix: number[][]) {
        const m = matrix.length, n = matrix[0].length;
        this.pre = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.pre[i+1][j+1] =
                    this.pre[i][j+1] + this.pre[i+1][j]
                    - this.pre[i][j] + matrix[i][j];
            }
        }
    }

    sumRegion(r1: number, c1: number, r2: number, c2: number): number {
        return this.pre[r2+1][c2+1] - this.pre[r1][c2+1]
             - this.pre[r2+1][c1] + this.pre[r1][c1];
    }
}
```

## Go
```go
type NumMatrix struct {
    pre [][]int
}

func Constructor(matrix [][]int) NumMatrix {
    m, n := len(matrix), len(matrix[0])
    pre := make([][]int, m+1)
    for i := range pre {
        pre[i] = make([]int, n+1)
    }
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            pre[i+1][j+1] = pre[i][j+1] + pre[i+1][j] - pre[i][j] + matrix[i][j]
        }
    }
    return NumMatrix{pre}
}

func (nm *NumMatrix) SumRegion(r1, c1, r2, c2 int) int {
    return nm.pre[r2+1][c2+1] - nm.pre[r1][c2+1] - nm.pre[r2+1][c1] + nm.pre[r1][c1]
}
```

## 为什么用 (m+1) × (n+1)

让 `pre[0][*]` 和 `pre[*][0]` 都是 0（哨兵行/列），查询时即使 `r1=0` 或 `c1=0` 也能直接套公式，**不用写 `if i == 0` 之类的边界**。这是前缀和题的常见技巧。

## Complexity

| | 时间 | 空间 |
|---|---|---|
| 预处理 | O(m·n) | O(m·n) |
| 单次查询 | **O(1)** | — |

如果用朴素求和，每次查询是 O((r2-r1)·(c2-c1))，多次查询会爆炸。

## 走一遍例子

```
matrix = [[3, 0, 1, 4, 2],
          [5, 6, 3, 2, 1],
          [1, 2, 0, 1, 5],
          [4, 1, 0, 1, 7],
          [1, 0, 3, 0, 5]]
```

`pre`（多一行一列 0）：
```
 0  0  0  0  0  0
 0  3  3  4  8 10
 0  8 14 18 24 27
 0  9 17 21 28 36
 0 13 22 26 34 49
 0 14 23 30 38 58
```

查询 `sumRegion(2, 1, 4, 3)`：
```
pre[5][4] - pre[2][4] - pre[5][1] + pre[2][1]
= 38 - 24 - 14 + 8
= 8 ✓
```

## 套路延伸

- **308. Range Sum Query 2D - Mutable** —— 多了 update，需要 2D 树状数组（BIT）或线段树
- **1314. Matrix Block Sum** —— 直接套 2D 前缀和的应用题
- **221. Maximal Square / 1277. Count Submatrices With All Ones** —— 2D 前缀和判矩阵和是否等于面积
- **363. Max Sum of Rectangle No Larger Than K** —— 行向压缩 + 1D 前缀和

> **一维前缀和处理"区间和"，二维前缀和处理"子矩阵和"。容斥是核心思想。**
