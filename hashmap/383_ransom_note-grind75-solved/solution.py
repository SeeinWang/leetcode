"""
383. Ransom Note
https://leetcode.com/problems/ransom-note/

Return true if ransomNote can be constructed using letters from magazine (each letter used once).

Example 1: ransomNote="a", magazine="b" → false
Example 2: ransomNote="aa", magazine="ab" → false
Example 3: ransomNote="aa", magazine="aab" → true

Constraints:
    1 <= ransomNote.length, magazine.length <= 10^5
    Both consist of lowercase English letters.
"""


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        maga_map = {}
        for s in magazine:
            maga_map[s] = maga_map.get(s, 0) + 1  # get 代替 if/else

        for c in ransomNote:
            if c not in maga_map:
                return False
            else:
                if maga_map[c] > 1:
                    maga_map[c] -= 1   # -= 代替 = x - 1
                else:
                    del maga_map[c]
