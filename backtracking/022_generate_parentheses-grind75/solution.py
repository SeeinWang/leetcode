"""
22. Generate Parentheses
https://leetcode.com/problems/generate-parentheses/

Backtracking with two counters: open and close. Add '(' when open < n;
add ')' when close < open. Collect when length == 2n.
"""

from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        pass
