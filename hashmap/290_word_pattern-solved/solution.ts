/*
 * 290. Word Pattern
 * https://leetcode.com/problems/word-pattern/
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between
 * a letter in pattern and a non-empty word in s.
 *
 * Example 1: pattern="abba", s="dog cat cat dog" → true
 */

function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const c2w = new Map<string, string>(), w2c = new Map<string, string>();
    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i], w = words[i];
        if ((c2w.has(c) && c2w.get(c) !== w) || (w2c.has(w) && w2c.get(w) !== c)) return false;
        c2w.set(c, w); w2c.set(w, c);
    }
    return true;
};
