/*
933. Number of Recent Calls
https://leetcode.com/problems/number-of-recent-calls/

Count requests in [t - 3000, t].

Example 1: pings [1,100,3001,3002] → [1,2,3,3]
Constraints: 1 <= t <= 10^9, At most 10^4 calls.
*/

type RecentCounter struct {

}

func Constructor() RecentCounter {
    return RecentCounter{}
}

func (this *RecentCounter) Ping(t int) int {

}
