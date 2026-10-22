// 字母异位词分组
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    let str = word.split("").sort().join("");
    if (map.has(str)) {
      map.get(str).push(word);
    } else {
      map.set(str, [word]);
    }
  }
  return Array.from(map.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
