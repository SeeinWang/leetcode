"""
428. Serialize and Deserialize N-ary Tree
https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/

Design an algorithm to serialize and deserialize an N-ary tree.
No restriction on the serialization format.
"""

from typing import Optional


# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []


class Codec:
    def serialize(self, root: Optional['Node']) -> str:
        pass

    def deserialize(self, data: str) -> Optional['Node']:
        pass
