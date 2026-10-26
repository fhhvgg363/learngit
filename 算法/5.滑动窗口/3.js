// 438. 找到字符串中所有字母异位词
var findAnagrams = function (s, p) {
  const result = [];
  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);
  const pLength = p.length;
  const sLength = s.length;
  if (sLength < pLength) return result;

  for (let i = 0; i < pLength; i++) {
    pCount[p.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i) - 97]++;
  }
  if (pCount.join() === sCount.join()) result.push(0);

  for (let i = pLength; i < sLength; i++) {
    sCount[s.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i - pLength) - 97]--;
    if (pCount.join() === sCount.join()) {
      result.push(i - pLength + 1);
    }
  }
  return result;
};

console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
