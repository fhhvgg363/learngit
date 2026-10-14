// 28. 找出字符串中第一个匹配项的下标
// haystack 里找 needle 第一次出现的起始下标，没有则 -1
function strStr(haystack, needle) {
  const n = haystack.length;
  const m = needle.length;
  if (m === 0) return 0;
  if (m > n) return -1;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === m) return i;
  }
  return -1;
}

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("mississippi", "issip")); // 4
