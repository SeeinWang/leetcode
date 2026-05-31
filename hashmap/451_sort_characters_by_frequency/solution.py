# 451. Sort Characters By Frequency
# https://leetcode.com/problems/sort-characters-by-frequency/
#
# Given a string s, sort it in decreasing order based on the frequency of the characters.
# The frequency of a character is the number of times it appears in the string.
#
# Return the sorted string. If there are multiple answers, return any of them.
#
# Example 1:
#     Input: s = "tree"
#     Output: "eert"
#
# Example 2:
#     Input: s = "cccaaa"
#     Output: "aaaccc"
#
# Example 3:
#     Input: s = "Aabb"
#     Output: "bbAa"
#
# Constraints:
#     - 1 <= s.length <= 5 * 10^5
#     - s consists of uppercase and lowercase English letters and digits.

from collections import Counter


class Solution:
    def frequencySort(self, s: str) -> str:
        freq = Counter(s)

        # buckets[i] = chars that appear i times
        buckets: list[list[str]] = [[] for _ in range(len(s) + 1)]
        for c, count in freq.items():
            buckets[count].append(c)

        result: list[str] = []
        for i in range(len(buckets) - 1, 0, -1):
            for c in buckets[i]:
                result.append(c * i)
        return "".join(result)
