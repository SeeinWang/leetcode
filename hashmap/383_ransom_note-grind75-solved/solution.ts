/*
 * 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Example 3: ransomNote="aa", magazine="aab" → true
 * Constraints: 1 <= lengths <= 10^5, lowercase letters only.
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
    const magaMap = new Map<string, number>()
    for (const c of magazine) {
        magaMap.set(c, (magaMap.get(c) || 0) + 1)
    }
    for (const c of ransomNote) {
        if (!magaMap.has(c)) {
            return false;
        } else {
            if (magaMap.get(c)! > 1) {
                magaMap.set(c, magaMap.get(c)! - 1)
            } else {
                magaMap.delete(c)
            }
        }
    }
    return true
};
