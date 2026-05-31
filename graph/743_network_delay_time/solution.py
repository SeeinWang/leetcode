"""
743. Network Delay Time
https://leetcode.com/problems/network-delay-time/

You are given a network of n nodes, labeled from 1 to n. You are also given
times, a list of travel times as directed edges times[i] = (ui, vi, wi), where
ui is the source node, vi is the target node, and wi is the time it takes for a
signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for
all the n nodes to receive the signal. If it is impossible for all the n nodes
to receive the signal, return -1.

Example 1:
    Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
    Output: 2

Example 2:
    Input: times = [[1,2,1]], n = 2, k = 1
    Output: 1

Example 3:
    Input: times = [[1,2,1]], n = 2, k = 2
    Output: -1

Constraints:
    1 <= k <= n <= 100
    1 <= times.length <= 6000
    times[i].length == 3
    1 <= ui, vi <= n
    ui != vi
    0 <= wi <= 100
    All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
"""
import heapq
from collections import defaultdict
from typing import List


class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        # Approach: Dijkstra from k using a min-heap (heapq).
        # Pop (dist, node); if already finalized skip; otherwise relax all outgoing edges.
        # Answer is max(dist[1..n]); return -1 if any node unreachable.
        # Time: O((V + E) log V), Space: O(V + E)
        graph = defaultdict(list)
        for u, v, w in times:
            graph[u].append((v, w))

        INF = 10001  # max possible path: (n-1) * max_w = 99 * 100 = 9900
        dist = [INF] * (n + 1)
        dist[k] = 0
        pq = [(0, k)]  # (distance, node)

        while pq:
            d, u = heapq.heappop(pq)
            if d > dist[u]:
                continue
            for v, w in graph[u]:
                if d + w < dist[v]:
                    dist[v] = d + w
                    heapq.heappush(pq, (d + w, v))

        ans = max(dist[1:])
        return -1 if ans == INF else ans
