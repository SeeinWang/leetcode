# 721. Accounts Merge

## 题目
给定一个账户列表 `accounts`，其中 `accounts[i]` 的第一个元素是姓名 `name`，其余元素是该账户的邮箱。两个账户如果有**任意一个相同的邮箱**就属于同一个人（同一人姓名相同，但相同姓名未必是同一人）。合并所有账户，返回合并后的列表：每项首元素为姓名，后续元素是**按字典序排序**的邮箱。结果顺序任意。

### Example
- Input:
  ```
  accounts = [
    ["John","johnsmith@mail.com","john_newyork@mail.com"],
    ["John","johnsmith@mail.com","john00@mail.com"],
    ["Mary","mary@mail.com"],
    ["John","johnnybravo@mail.com"]
  ]
  ```
  → `[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]`

### Constraints
- `1 <= accounts.length <= 1000`
- `2 <= accounts[i].length <= 10`
- `1 <= accounts[i][j].length <= 30`
- `accounts[i][0]` 为姓名，其余为合法邮箱格式

## 思路
Union-Find: union all emails in each account; group merged emails by root; sort and format results.

**Complexity:** Time O(n × m × α), Space O(n × m)

## Python
```python
from collections import defaultdict

def accountsMerge(accounts: list[list[str]]) -> list[list[str]]:
    parent = {}

    def find(x):
        if x != parent.setdefault(x, x):
            parent[x] = find(parent[x])
        return parent[x]

    def union(x, y):
        parent[find(x)] = find(y)

    email_to_name = {}
    for account in accounts:
        name = account[0]
        for email in account[1:]:
            email_to_name[email] = name
            union(account[1], email)

    groups = defaultdict(list)
    for email in email_to_name:
        groups[find(email)].append(email)

    return [[email_to_name[root]] + sorted(emails) for root, emails in groups.items()]
```

## TypeScript
```typescript
function accountsMerge(accounts: string[][]): string[][] {
    const parent = new Map<string, string>();
    const find = (x: string): string => {
        if (!parent.has(x)) parent.set(x, x);
        if (parent.get(x) !== x) parent.set(x, find(parent.get(x)!));
        return parent.get(x)!;
    };
    const union = (x: string, y: string) => parent.set(find(x), find(y));
    const emailToName = new Map<string, string>();
    for (const [name, ...emails] of accounts) {
        for (const email of emails) { emailToName.set(email, name); union(emails[0], email); }
    }
    const groups = new Map<string, string[]>();
    for (const email of emailToName.keys()) {
        const root = find(email);
        if (!groups.has(root)) groups.set(root, []);
        groups.get(root)!.push(email);
    }
    return [...groups.entries()].map(([root, emails]) =>
        [emailToName.get(root)!, ...emails.sort()]);
}
```

## Go
```go
func accountsMerge(accounts [][]string) [][]string {
    parent := make(map[string]string)
    var find func(string) string
    find = func(x string) string {
        if _, ok := parent[x]; !ok { parent[x] = x }
        if parent[x] != x { parent[x] = find(parent[x]) }
        return parent[x]
    }
    emailToName := make(map[string]string)
    for _, acc := range accounts {
        for _, email := range acc[1:] {
            emailToName[email] = acc[0]
            p := find(acc[1]); q := find(email); parent[p] = q
        }
    }
    groups := make(map[string][]string)
    for email := range emailToName { groups[find(email)] = append(groups[find(email)], email) }
    result := [][]string{}
    for root, emails := range groups {
        sort.Strings(emails)
        result = append(result, append([]string{emailToName[root]}, emails...))
    }
    return result
}
```
