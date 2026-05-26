/*
90. Subsets II
https://leetcode.com/problems/subsets-ii/

Sort first, then backtrack. Skip duplicates at the same recursion depth
(i > start && nums[i] === nums[i-1]) to avoid generating duplicate subsets.
*/

function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    const backtrack = (start: number, current: number[]) => {
        result.push([...current]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    };
    backtrack(0, []);
    return result;
}
