# 27. Remove Element

Fast/slow two pointers: slow tracks write position, fast scans for valid elements.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def removeElement(nums: list[int], val: int) -> int:
    k = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k
```

## TypeScript
```typescript
function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}
```

## Go
```go
func removeElement(nums []int, val int) int {
    k := 0
    for i := 0; i < len(nums); i++ {
        if nums[i] != val {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}
```
