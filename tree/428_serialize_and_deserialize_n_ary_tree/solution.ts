/*
 * 428. Serialize and Deserialize N-ary Tree
 * https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/
 *
 * Design an algorithm to serialize and deserialize an N-ary tree. There is no
 * restriction on how your serialization/deserialization algorithm should work.
 *
 * Constraints:
 *     0 <= number of nodes <= 10^4
 *     0 <= Node.val <= 10^4
 *     The height of the n-ary tree is less than or equal to 1000.
 */

class _Node {
    val: number
    children: _Node[]
    left: _Node
    constructor(val?: number, children?: _Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.children = (children === undefined ? [] : children)
    }
}



function serialize(root: _Node | null): string {
    const arr: number[] = []
    function dfsSerialize(root: _Node | null): void {
        if (root == null) return;
        arr.push(root.val)
        const length = root.children.length
        arr.push(length)
        for (let i = 0; i < length; i++) {
            dfsSerialize(root.children[i])
        }
    }
    dfsSerialize(root)
    return arr.join(",")
};

function deserialize(data: string): _Node | null {
    if (data === "") return null
    const queue = data.split(",").map(Number)
    let i = 0
    function dfs(): _Node {
        if (i + 1 >= queue.length) throw new Error("malformed input")
        const val = queue[i++]
        const size = queue[i++]
        const children: _Node[] = []
        for (let k = 0; k < size; k++) {
            children.push(dfs())
        }

        return new _Node(val, children)
    }
    return dfs()
};
