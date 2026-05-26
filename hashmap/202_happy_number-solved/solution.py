"""
202. Happy Number
https://leetcode.com/problems/happy-number/

Write an algorithm to determine if a number n is happy.
Replace the number by the sum of squares of its digits, repeat until it
equals 1 (happy) or loops endlessly (not happy).

Example: n = 19 → true
"""


def sumOfSquare(n: int) -> int:
    sum = 0
    while n > 0:
        digit = n % 10
        sum += digit * digit
        n = n // 10
    return sum


class Solution:
    def isHappy(self, n: int) -> bool:
        num_set = set()
        current = n
        while current != 1 and (current not in num_set):
            num_set.add(current)
            current = sumOfSquare(current)

        return current == 1
