# 79. Word Search

Grid DFS + backtracking. Try each cell as a starting point; from there, walk to 4-neighbors matching the next char.

**Steps:**
1. For each `(r, c)` in grid, if `board[r][c] === word[0]`, start DFS.
2. DFS(r, c, i): if `i === word.length` return true; if out of bounds or mismatch return false.
3. Mark `board[r][c] = '#'` (visited), recurse to 4 directions with `i + 1`, then restore.

**Complexity:** Time O(m·n · 4^L) where L = word length, Space O(L) recursion.

**Key idea:** In-place visited marking avoids an extra visited matrix; remember to restore on backtrack.
