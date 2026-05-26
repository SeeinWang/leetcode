# 121. Best Time to Buy and Sell Stock

Find the maximum profit from a single buy-sell transaction.

**Complexity:** Time O(n), Space O(1)

## Python
```python
def maxProfit(prices: list[int]) -> int:
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit
```

## TypeScript
```typescript
function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}
```

## Go
```go
func maxProfit(prices []int) int {
    minPrice := math.MaxInt32
    maxProfit := 0
    for _, price := range prices {
        if price < minPrice {
            minPrice = price
        }
        if price-minPrice > maxProfit {
            maxProfit = price - minPrice
        }
    }
    return maxProfit
}
```
