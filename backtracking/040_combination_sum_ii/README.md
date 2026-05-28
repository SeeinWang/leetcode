# 40. Combination Sum II

Backtracking with **single use** + **same-level dedup**. Compare with 39 (unlimited reuse, no dup candidates) and 90 (subsets with dup).

**Steps:**
1. Sort `candidates`.
2. Use `start` index; recurse with `i + 1` (each element used at most once).
3. Skip duplicates at same recursion depth: `if i > start && candidates[i] === candidates[i-1] continue`.
4. Prune: `if curSum + candidates[i] > target` break (sorted array).

**Complexity:** Time O(2^n) worst case, Space O(target) recursion.

**Key idea:** "Same-level skip" — at the same depth, don't reuse equal values, but different depths CAN use them (that's how `[1,1,6]` is allowed when there are two 1s).
