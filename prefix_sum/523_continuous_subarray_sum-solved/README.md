# 523. Continuous Subarray Sum

Prefix sum + hashmap on **remainders**, but store the **earliest index** instead of count. If the same remainder reappears at index `i` and was first seen at index `j`, then `nums[j+1..i]` sums to a multiple of k. Length check (≥ 2) → require `i - j >= 2`.

**Complexity:** Time O(n), Space O(min(n, k))

## Python
```python
def checkSubarraySum(nums: list[int], k: int) -> bool:
    seen = {0: -1}            # remainder -> earliest index
    prefix_sum = 0
    for i, num in enumerate(nums):
        prefix_sum += num
        r = prefix_sum % k
        if r in seen:
            if i - seen[r] >= 2:
                return True
        else:
            seen[r] = i        # only record first occurrence
    return False
```

## TypeScript
```typescript
function checkSubarraySum(nums: number[], k: number): boolean {
    const seen = new Map<number, number>([[0, -1]]);
    let prefixSum = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const r = prefixSum % k;
        if (seen.has(r)) {
            if (i - seen.get(r)! >= 2) return true;
        } else {
            seen.set(r, i);
        }
    }
    return false;
}
```

## Go
```go
func checkSubarraySum(nums []int, k int) bool {
    seen := map[int]int{0: -1}
    prefixSum := 0
    for i, num := range nums {
        prefixSum += num
        r := prefixSum % k
        if j, ok := seen[r]; ok {
            if i-j >= 2 {
                return true
            }
        } else {
            seen[r] = i
        }
    }
    return false
}
```

---

## Follow-up: 如果允许 `nums[i] < 0` 或 `k == 0`

LeetCode 题面约束 `nums[i] >= 0` 且 `k >= 1`，所以原解不用处理这两种情况。但面试常追问，思路是**保持同一个骨架，只换 key 的算法**：

| 场景 | key 怎么算 |
|------|-----------|
| 正常情况 | `prefixSum % k` |
| `nums[i]` 可能为负 | `((prefixSum % k) + k) % k` 归一化（JS/Go 的 `%` 对负数返回负余数）|
| `k == 0` | "k 的倍数"退化为 "等于 0"，直接用 `prefixSum` 当 key（这就是 LC 525 的解法）|

### 合并版（TypeScript）

```typescript
function checkSubarraySum(nums: number[], k: number): boolean {
    const seen = new Map<number, number>([[0, -1]]);
    let prefixSum = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const key = k === 0 ? prefixSum : ((prefixSum % k) + k) % k;
        if (seen.has(key)) {
            if (i - seen.get(key)! >= 2) return true;
        } else {
            seen.set(key, i);
        }
    }
    return false;
}
```

### 关键洞察

> 把 "k=0 退化为 LC 525" 和 "负数取模归一化" 收敛到**同一个哈希表骨架**，只是 key 的计算公式换一下。

这种"把多个变体统一到一个骨架"的抽象能力是面试加分项。常见 follow-up：
- "如果 nums 有负数？" → key 归一化
- "如果 k=0？" → key 用前缀和本身
- "如果要求长度恰好等于 m？" → 改 `i - j >= 2` 这个条件
