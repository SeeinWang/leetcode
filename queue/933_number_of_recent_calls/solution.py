"""
933. Number of Recent Calls
https://leetcode.com/problems/number-of-recent-calls/

Implement RecentCounter that counts recent requests within [t - 3000, t].

- RecentCounter() Initializes with zero requests.
- int ping(int t) Adds request at time t and returns count in [t-3000, t].
  Each call uses strictly increasing t.

Example 1:
    Input: ["RecentCounter","ping","ping","ping","ping"]
           [[],[1],[100],[3001],[3002]]
    Output: [null,1,2,3,3]

Constraints:
    1 <= t <= 10^9
    At most 10^4 calls to ping.
"""

class RecentCounter:

    def __init__(self):
        pass

    def ping(self, t: int) -> int:
        pass
