"""
295. Find Median from Data Stream
https://leetcode.com/problems/find-median-from-data-stream/

Implement MedianFinder class:
- MedianFinder() initializes the object.
- void addNum(int num) adds integer num from the data stream.
- double findMedian() returns the median of all elements so far.

Example 1:
    Input: ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
           [[],[1],[2],[],[3],[]]
    Output: [null,null,null,1.5,null,2.0]

Constraints:
    -10^5 <= num <= 10^5
    At least one element before calling findMedian.
    At most 5 * 10^4 calls.
"""
