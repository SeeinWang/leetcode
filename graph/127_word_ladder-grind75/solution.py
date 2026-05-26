"""
127. Word Ladder
https://leetcode.com/problems/word-ladder/

Given beginWord, endWord, and a wordList, return the number of words in the
shortest transformation sequence from beginWord to endWord, or 0 if none exists.
Each adjacent pair of words differs by exactly one letter.

Example 1:
    Input: beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]
    Output: 5  ("hit"→"hot"→"dot"→"dog"→"cog")

Example 2:
    Input: beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log"]
    Output: 0

Constraints:
    1 <= beginWord.length <= 10
    endWord.length == beginWord.length
    1 <= wordList.length <= 5000
    All words consist of lowercase English letters.
"""
from typing import List


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        pass
