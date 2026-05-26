"""
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/

Group strings that are anagrams of each other. Return the answer in any order.

Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Constraints:
    1 <= strs.length <= 10^4
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.
"""

from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        str_dict = {}
        for str in strs:
            sortedStr = "".join(sorted(str))
            str_dict[sortedStr] = str_dict.get(sortedStr, []) + [str]
        return list(str_dict.values())
