/*
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 *
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 *
 * Example 1: strs=["eat","tea","tan","ate","nat","bat"] → [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

function groupAnagrams(strs: string[]): string[][] {
    const strMap = new Map<string, string[]>()
    for (const str of strs) {
        const sortedStr = str.split("").sort().join("")
        if (strMap.has(sortedStr)) {
            strMap.set(sortedStr, [...strMap.get(sortedStr) || [], str])
        } else {
            strMap.set(sortedStr, [str])
        }
    }
    return Array.from(strMap.values())
};
