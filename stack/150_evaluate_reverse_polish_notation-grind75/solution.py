"""
150. Evaluate Reverse Polish Notation
https://leetcode.com/problems/evaluate-reverse-polish-notation/

Evaluate the expression in Reverse Polish Notation. Valid operators are '+', '-', '*', '/'.
Division truncates toward zero.

Example 1:
    Input: tokens = ["2","1","+","3","*"]
    Output: 9
    Explanation: ((2 + 1) * 3) = 9

Example 2:
    Input: tokens = ["4","13","5","/","+"]
    Output: 6

Example 3:
    Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
    Output: 22

Constraints:
    1 <= tokens.length <= 10^4
    tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in [-200, 200].
"""

from typing import List

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        pass
