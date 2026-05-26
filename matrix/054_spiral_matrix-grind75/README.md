# 54. Spiral Matrix

Shrink top/bottom/left/right boundaries layer by layer.

**Complexity:** Time O(m*n), Space O(1)

## Python
```python
def spiralOrder(matrix: list[list[int]]) -> list[int]:
    result=[]
    top,bottom,left,right=0,len(matrix)-1,0,len(matrix[0])-1
    while top<=bottom and left<=right:
        for c in range(left,right+1): result.append(matrix[top][c]); top+=1
        for r in range(top,bottom+1): result.append(matrix[r][right]); right-=1
        if top<=bottom:
            for c in range(right,left-1,-1): result.append(matrix[bottom][c]); bottom-=1
        if left<=right:
            for r in range(bottom,top-1,-1): result.append(matrix[r][left]); left+=1
    return result
```

## TypeScript
```typescript
function spiralOrder(matrix: number[][]): number[] {
    const result:number[]=[];
    let top=0,bottom=matrix.length-1,left=0,right=matrix[0].length-1;
    while(top<=bottom&&left<=right){
        for(let c=left;c<=right;c++) result.push(matrix[top][c]); top++;
        for(let r=top;r<=bottom;r++) result.push(matrix[r][right]); right--;
        if(top<=bottom){for(let c=right;c>=left;c--) result.push(matrix[bottom][c]); bottom--;}
        if(left<=right){for(let r=bottom;r>=top;r--) result.push(matrix[r][left]); left++;}
    }
    return result;
}
```

## Go
```go
func spiralOrder(matrix [][]int) []int {
    result:=[]int{}
    top,bottom,left,right:=0,len(matrix)-1,0,len(matrix[0])-1
    for top<=bottom&&left<=right {
        for c:=left;c<=right;c++ { result=append(result,matrix[top][c]) }; top++
        for r:=top;r<=bottom;r++ { result=append(result,matrix[r][right]) }; right--
        if top<=bottom { for c:=right;c>=left;c-- { result=append(result,matrix[bottom][c]) }; bottom-- }
        if left<=right { for r:=bottom;r>=top;r-- { result=append(result,matrix[r][left]) }; left++ }
    }
    return result
}
```
