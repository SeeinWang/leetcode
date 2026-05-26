class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/*
 * 314. Binary Tree Vertical Order Traversal
 * https://leetcode.com/problems/binary-tree-vertical-order-traversal/
 *
 * Given the root of a binary tree, return the vertical order traversal of its
 * nodes' values (i.e., column by column, from left to right). Within each
 * column, nodes are listed from top to bottom; nodes in the same row and
 * column are ordered from left to right.
 *
 * Example: root = [3,9,20,null,null,15,7] → [[9],[3,15],[20],[7]]
 * Constraints: 0 <= number of nodes <= 100, -100 <= Node.val <= 100
 */

function verticalOrder(root: TreeNode | null): number[][] {
    /* const positionMap = new Map<TreeNode, number>()
    const colToNode = new Map<number, number[]>()
    const queue: TreeNode[] = []
    const res = []

    if (root !== null) {
        queue.push(root)
        positionMap.set(root!, 0)
    }

    let min = 0
    let head = 0

    while (queue.length > head) {
        const cur = queue[head++]
        const position = positionMap.get(cur!)
        const newList = colToNode.get(position!) || []
        newList.push(cur!.val)
        colToNode.set(position!, newList)

        if (cur!.left) {
            queue.push(cur!.left)
            positionMap.set(cur!.left, position! - 1)
        }
        if (cur!.right) {
            queue.push(cur!.right)
            positionMap.set(cur!.right, position! + 1)
        }

        min = Math.min(min, position!)
    }

    while (colToNode.has(min)) {
        res.push(colToNode.get(min)!)
        min++
    }

    return res */

    const colToNode = new Map<number, number[]>()
    const queue: [TreeNode, number][] = []
    const res: number[][] = []

    if (root !== null) {
        queue.push([root, 0])
    }

    let min = 0
    let head = 0

    while (queue.length > head) {
        const [node, position] = queue[head++]
        const newList = colToNode.get(position) || []
        newList.push(node.val)
        colToNode.set(position, newList)

        if (node.left) {
            queue.push([node.left, position - 1])
        }
        if (node.right) {
            queue.push([node.right, position + 1])
        }

        min = Math.min(min, position!)
    }

    while (colToNode.has(min)) {
        res.push(colToNode.get(min)!)
        min++
    }

    return res
};
