# 131. Palindrome Partitioning

"Cut-position" backtracking. At each recursion, decide where the next cut goes; only descend if the piece between the last cut and the new cut is a palindrome.

**Steps:**
1. `backtrack(start)`: if `start === n`, push `[...path]`.
2. For `end` in `[start, n)`: if `s.substring(start, end+1)` is palindrome, push it, recurse `backtrack(end + 1)`, pop.

**Complexity:** Time O(n · 2^n) (2^n partitions × O(n) palindrome check), Space O(n).

**Optional optimization:** Precompute `isPal[i][j]` with DP in O(n²) to O(1) lookup during backtracking.

**Key idea:** Same template as combinations, but the "choice" at each level is *where to cut*, with a palindrome constraint.
