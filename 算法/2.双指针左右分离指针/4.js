// 交替合并字符串
var mergeAlternately = function (word1, word2) {
  let i = 0;
  let j = 0;
  const newArr = [];
  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      newArr.push(word1[i]);
      i++;
    }
    if (j < word2.length) {
      newArr.push(word2[j]);
      j++;
    }
  }
  return newArr.join("");
};
console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
