// 3. 无重复字符的最长子串
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3  "abc"
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3  "wke"
