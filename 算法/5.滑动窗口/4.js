// 76. 最小覆盖子串
var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  const need = new Map();
  for (const ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }
  const needKinds = need.size;

  const window = new Map();
  let valid = 0;
  let left = 0;
  let start = 0;
  let minLen = Infinity;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) valid++;
    }

    while (valid === needKinds) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }
      const d = s[left];
      left++;
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;
        window.set(d, window.get(d) - 1);
      }
    }
  }

  return minLen === Infinity ? "" : s.slice(start, start + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
console.log(minWindow("a", "a")); // a
console.log(minWindow("a", "aa")); // ""
