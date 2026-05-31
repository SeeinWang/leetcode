// Union-Find / Disjoint Set Union (DSU)
// 路径压缩 + 按秩合并，单次操作近 O(1)
//
// 用法：
//   uf := NewUnionFind(n)
//   uf.Union(a, b)        // 合并；返回是否真的合并了
//   uf.Find(x)            // 找根
//   uf.Connected(a, b)    // 是否同集合
//   uf.Count              // 当前集合数量

package templates

type UnionFind struct {
	parent []int
	rank   []int
	Count  int
}

func NewUnionFind(n int) *UnionFind {
	parent := make([]int, n)
	for i := range parent {
		parent[i] = i
	}
	return &UnionFind{parent: parent, rank: make([]int, n), Count: n}
}

func (u *UnionFind) Find(x int) int {
	for u.parent[x] != x {
		u.parent[x] = u.parent[u.parent[x]] // 路径压缩
		x = u.parent[x]
	}
	return x
}

func (u *UnionFind) Union(a, b int) bool {
	ra, rb := u.Find(a), u.Find(b)
	if ra == rb {
		return false
	}
	if u.rank[ra] < u.rank[rb] {
		u.parent[ra] = rb
	} else if u.rank[ra] > u.rank[rb] {
		u.parent[rb] = ra
	} else {
		u.parent[rb] = ra
		u.rank[ra]++
	}
	u.Count--
	return true
}

func (u *UnionFind) Connected(a, b int) bool {
	return u.Find(a) == u.Find(b)
}
