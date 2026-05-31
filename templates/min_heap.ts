// MinHeap — TS 通用最小堆
// 用法：
//   const heap = new MinHeap<[number, number]>((a, b) => a[0] - b[0])
//   heap.push([3, 'a']); heap.push([1, 'b'])
//   heap.pop()  // [1, 'b']
//
// 改成 MaxHeap：把 comparator 反过来 (a, b) => b[0] - a[0]
// 默认 comparator（数字升序）：new MinHeap<number>()

class MinHeap<T> {
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
