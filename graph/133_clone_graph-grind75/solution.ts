class _Node {
    val: number
    neighbors: _Node[]
    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

/*
 * 133. Clone Graph
 * https://leetcode.com/problems/clone-graph/
 *
 * Given a reference of a node in a connected undirected graph.
 *
 * Return a deep copy (clone) of the graph.
 *
 * Each node in the graph contains a value (int) and a list (List[Node]) of its
 * neighbors.
 *
 *   class Node {
 *       public int val;
 *       public List<Node> neighbors;
 *   }
 *
 * Test case format:
 * For simplicity, each node's value is the same as the node's index (1-indexed).
 * For example, the first node with val == 1, the second node with val == 2, and
 * so on. The graph is represented in the test case using an adjacency list.
 *
 * An adjacency list is a collection of unordered lists used to represent a
 * finite graph. Each list describes the set of neighbors of a node in the graph.
 *
 * The given node will always be the first node with val = 1. You must return
 * the copy of the given node as a reference to the cloned graph.
 *
 * Example 1:
 *   Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 *   Output: [[2,4],[1,3],[2,4],[1,3]]
 *
 * Example 2:
 *   Input: adjList = [[]]
 *   Output: [[]]
 *   Explanation: Note that the input contains one empty list. The graph
 *     consists of only one node with val = 1 and it does not have any neighbors.
 *
 * Example 3:
 *   Input: adjList = []
 *   Output: []
 *   Explanation: This is an empty graph, it does not have any nodes.
 *
 * Constraints:
 *   - The number of nodes in the graph is in the range [0, 100].
 *   - 1 <= Node.val <= 100
 *   - Node.val is unique for each node.
 *   - There are no repeated edges and no self-loops in the graph.
 *   - The Graph is connected and all nodes can be visited starting from the
 *     given node.
 */

// Approach: DFS/BFS with old→new hashmap. Time: O(V + E), Space: O(V)

function cloneGraph(node: _Node | null): _Node | null {

}
