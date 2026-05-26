# 17. Letter Combinations of a Phone Number

Backtracking: map each digit to its letters, recursively build combinations character by character.

**Complexity:** Time O(4^n × n), Space O(n)

## Python
```python
def letterCombinations(digits: str) -> list[str]:
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    result = []
    def backtrack(index, current):
        if index == len(digits):
            result.append(current)
            return
        for c in phone[digits[index]]:
            backtrack(index + 1, current + c)
    backtrack(0, '')
    return result
```

## TypeScript
```typescript
function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    const phone: Record<string, string> = {'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'};
    const result: string[] = [];
    const backtrack = (i: number, curr: string) => {
        if (i === digits.length) { result.push(curr); return; }
        for (const c of phone[digits[i]]) backtrack(i + 1, curr + c);
    };
    backtrack(0, '');
    return result;
}
```

## Go
```go
func letterCombinations(digits string) []string {
    if len(digits) == 0 { return nil }
    phone := map[byte]string{'2':"abc",'3':"def",'4':"ghi",'5':"jkl",'6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}
    result := []string{}
    var backtrack func(i int, curr string)
    backtrack = func(i int, curr string) {
        if i == len(digits) { result = append(result, curr); return }
        for _, c := range phone[digits[i]] { backtrack(i+1, curr+string(c)) }
    }
    backtrack(0, "")
    return result
}
```
