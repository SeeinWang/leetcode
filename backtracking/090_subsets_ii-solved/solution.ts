/*
90. Subsets II
https://leetcode.com/problems/subsets-ii/

Sort first, then backtrack. Skip duplicates at the same recursion depth
(i > start && nums[i] === nums[i-1]) to avoid generating duplicate subsets.
*/

function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const result: number[][] = []
    function backtrack(temp: number[], start: number) {
        result.push([...temp])
        for (let i = start; i < nums.length; i++) {
            if (i !== start && nums[i] === nums[i - 1]) continue;
            temp.push(nums[i])
            backtrack(temp, i + 1)
            temp.pop()
        }
    }

    backtrack([], 0)

    return result
}
