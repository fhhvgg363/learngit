// 128. 最长连续序列
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  for (const x of set) {
    if (set.has(x - 1)) continue;
    let current = x;
    let len = 1;
    while (set.has(current + 1)) {
      current++;
      len++;
    }
    max = Math.max(max, len);
  }
  return max;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
