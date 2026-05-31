"""
Monotonic Stack Template

A stack kept in monotonic order (increasing or decreasing). When the incoming
element breaks the order, you pop — and each pop resolves an answer for the
popped element (its "next greater / next smaller" neighbor). Store indices when
you need distances or widths; store values when you only need the neighbor.

Decreasing stack -> finds the NEXT GREATER element.
Increasing stack -> finds the NEXT SMALLER element.

Use cases:
- Next greater element (LeetCode 496, 503)
- Daily temperatures (LeetCode 739)
- Largest rectangle in histogram (LeetCode 84)
- Trapping rain water (LeetCode 42)
"""
from typing import List


def next_greater_elements(nums: List[int]) -> List[int]:
    """For each element, the next strictly greater element to its right, else -1.

    Decreasing stack of indices: when nums[i] is bigger than the value at the
    stack top, nums[i] is that element's next greater.
    """
    n = len(nums)
    res = [-1] * n
    stack: List[int] = []  # indices, values decreasing
    for i, num in enumerate(nums):
        while stack and nums[stack[-1]] < num:
            res[stack.pop()] = num
        stack.append(i)
    return res


if __name__ == "__main__":
    print(next_greater_elements([2, 1, 2, 4, 3]))  # [4, 2, 4, -1, -1]
