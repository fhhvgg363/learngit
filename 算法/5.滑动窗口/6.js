// 209. 长度最小的子数组：和 >= target 的连续子数组的最短长度，没有则 0
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2  [4,3]
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
