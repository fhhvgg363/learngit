// 209. 长度最小的子数组：前缀和 + 枚举端点。O(n²)
var minSubArrayLen = function (target, nums) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  let minLength = Infinity;
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (prefix[j] - prefix[i] >= target) {
        minLength = Math.min(minLength, j - i);
      }
    }
  }
  return minLength === Infinity ? 0 : minLength;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); //
