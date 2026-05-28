# 22. Generate Parentheses

Backtracking with two counters tracking how many `(` and `)` have been used. Two rules:
- can add `(` if `open < n`
- can add `)` if `close < open`

When length reaches `2n`, push to result.

**Complexity:** Time O(4^n / √n) (Catalan number), Space O(n) recursion depth.

**Key idea:** Constraint-pruned construction — never generate invalid prefixes.
