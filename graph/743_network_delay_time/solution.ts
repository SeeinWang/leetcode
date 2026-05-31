/*
 * 743. Network Delay Time
 * https://leetcode.com/problems/network-delay-time/
 *
 * You are given a network of n nodes, labeled from 1 to n. You are also given
 * times, a list of travel times as directed edges times[i] = (ui, vi, wi),
 * where ui is the source node, vi is the target node, and wi is the time it
 * takes for a signal to travel from source to target.
 *
 * We will send a signal from a given node k. Return the minimum time it takes
 * for all the n nodes to receive the signal. If it is impossible for all the n
 * nodes to receive the signal, return -1.
 *
 * Example 1:
 *   Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
 *   Output: 2
 *
 * Example 2:
 *   Input: times = [[1,2,1]], n = 2, k = 1
 *   Output: 1
 *
 * Example 3:
 *   Input: times = [[1,2,1]], n = 2, k = 2
 *   Output: -1
 *
 * Constraints:
 *   - 1 <= k <= n <= 100
 *   - 1 <= times.length <= 6000
 *   - times[i].length == 3
 *   - 1 <= ui, vi <= n
 *   - ui != vi
 *   - 0 <= wi <= 100
 *   - All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
 */

// Approach: Dijkstra from k using a min-heap (priority queue).
// Pop (dist, node); if node already finalized skip; otherwise relax all outgoing edges.
// Answer is max(dist[1..n]); return -1 if any node unreachable.
// Time: O((V + E) log V), Space: O(V + E)

/* class MinHeap<T> {
    private heap: T[] = []
    private cmp: (a: T, b: T) => number

    constructor(cmp: (a: T, b: T) => number = (a: any, b: any) => a - b) {
        this.cmp = cmp
    }

    size(): number { return this.heap.length }
    peek(): T | undefined { return this.heap[0] }

    push(x: T): void {
        this.heap.push(x)
        this.bubbleUp(this.heap.length - 1)
    }

    pop(): T | undefined {
        if (!this.heap.length) return undefined
        const top = this.heap[0]
        const last = this.heap.pop()!
        if (this.heap.length) {
            this.heap[0] = last
            this.sinkDown(0)
        }
        return top
    }

    private bubbleUp(i: number): void {
        while (i > 0) {
            const p = (i - 1) >> 1
            if (this.cmp(this.heap[i], this.heap[p]) >= 0) break
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
            i = p
        }
    }

    private sinkDown(i: number): void {
        const n = this.heap.length
        while (true) {
            const l = 2 * i + 1, r = 2 * i + 2
            let s = i
            if (l < n && this.cmp(this.heap[l], this.heap[s]) < 0) s = l
            if (r < n && this.cmp(this.heap[r], this.heap[s]) < 0) s = r
            if (s === i) break
            [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]]
            i = s
        }
    }
}
 */
function networkDelayTime(times: number[][], n: number, k: number): number {
    let max = 0
    type Edge = [node: number, weight: number]
    const graph: Edge[][] = Array.from({ length: n + 1 }, () => [])
    const dist = new Array(n + 1).fill(Infinity)

    for (const time of times) {
        const [u, v, w] = time
        graph[u].push([v, w])
    }

    const pq = new MinHeap<number[]>((a, b) => a[0] - b[0])
    dist[k] = 0
    pq.push([0, k])

    while (pq.size() > 0) {
        const cur = pq.pop()!
        const [d, u] = cur;

        if (d > dist[u]) continue;

        const neighbours = graph[u]

        for (const nei of neighbours) {
            const [v, w] = nei
            const newWeight = d + w
            if (newWeight < dist[v]) {
                dist[v] = newWeight
                pq.push([newWeight, v])
            }
        }
    }

    for (let i = 0; i <= n; i++) {
        if (dist[i] === Infinity) return -1
        if (dist[i] > max) max = dist[i]
    }

    return max

}
