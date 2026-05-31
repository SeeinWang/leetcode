// Union-Find / Disjoint Set Union (DSU)
// 路径压缩 + 按秩合并，单次操作近 O(1)
//
// 用法：
//   const uf = new UnionFind(n)
//   uf.union(a, b)            // 合并；返回是否真的合并了（之前不在同一集合）
//   uf.find(x)                // 找根
//   uf.connected(a, b)        // 是否同集合
//   uf.count                  // 当前集合数量

class UnionFind {
    private parent: number[]
    private rank: number[]
    public count: number

    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i)
        this.rank = new Array(n).fill(0)
        this.count = n
    }

    find(x: number): number {
        while (this.parent[x] !== x) {
            this.parent[x] = this.parent[this.parent[x]]  // 路径压缩
            x = this.parent[x]
        }
        return x
    }

    union(a: number, b: number): boolean {
        const ra = this.find(a), rb = this.find(b)
        if (ra === rb) return false
        if (this.rank[ra] < this.rank[rb]) {
            this.parent[ra] = rb
        } else if (this.rank[ra] > this.rank[rb]) {
            this.parent[rb] = ra
        } else {
            this.parent[rb] = ra
            this.rank[ra]++
        }
        this.count--
        return true
    }

    connected(a: number, b: number): boolean {
        return this.find(a) === this.find(b)
    }
}
