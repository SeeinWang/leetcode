# Union-Find / Disjoint Set Union (DSU)
# 路径压缩 + 按秩合并，单次操作近 O(1)
#
# 用法：
#   uf = UnionFind(n)
#   uf.union(a, b)         # 合并；返回是否真的合并了
#   uf.find(x)             # 找根
#   uf.connected(a, b)     # 是否同集合
#   uf.count               # 当前集合数量


class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.count = n

    def find(self, x: int) -> int:
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]  # 路径压缩
            x = self.parent[x]
        return x

    def union(self, a: int, b: int) -> bool:
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False
        if self.rank[ra] < self.rank[rb]:
            self.parent[ra] = rb
        elif self.rank[ra] > self.rank[rb]:
            self.parent[rb] = ra
        else:
            self.parent[rb] = ra
            self.rank[ra] += 1
        self.count -= 1
        return True

    def connected(self, a: int, b: int) -> bool:
        return self.find(a) == self.find(b)
