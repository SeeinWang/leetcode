"""
90. Subsets II
https://leetcode.com/problems/subsets-ii/

Sort first, then backtrack. Skip duplicates at the same recursion depth
(i > start and nums[i] == nums[i-1]) to avoid generating duplicate subsets.
"""


def subsetsWithDup(nums: list[int]) -> list[list[int]]:
    nums.sort()
    result = []

    def backtrack(start, current):
        result.append(current[:])
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i - 1]:
                continue
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()

    backtrack(0, [])
    return result
