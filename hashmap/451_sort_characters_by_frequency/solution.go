// 451. Sort Characters By Frequency
// https://leetcode.com/problems/sort-characters-by-frequency/
//
// Given a string s, sort it in decreasing order based on the frequency of the characters.
// The frequency of a character is the number of times it appears in the string.
//
// Return the sorted string. If there are multiple answers, return any of them.
//
// Example 1:
//     Input: s = "tree"
//     Output: "eert"
//
// Example 2:
//     Input: s = "cccaaa"
//     Output: "aaaccc"
//
// Example 3:
//     Input: s = "Aabb"
//     Output: "bbAa"
//
// Constraints:
//     - 1 <= s.length <= 5 * 10^5
//     - s consists of uppercase and lowercase English letters and digits.

package main

import "strings"

func frequencySort(s string) string {
	freq := make(map[rune]int)
	for _, c := range s {
		freq[c]++
	}

	// buckets[i] = chars that appear i times
	buckets := make([][]rune, len(s)+1)
	for c, count := range freq {
		buckets[count] = append(buckets[count], c)
	}

	var sb strings.Builder
	sb.Grow(len(s))
	for i := len(buckets) - 1; i >= 1; i-- {
		for _, c := range buckets[i] {
			sb.WriteString(strings.Repeat(string(c), i))
		}
	}
	return sb.String()
}
