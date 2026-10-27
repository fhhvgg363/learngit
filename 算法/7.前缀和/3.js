// 560. 和为 K 的子数组：前缀和 + 枚举左右端点，不用哈希表。O(n²)
var subarraySum = function (nums, k) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (prefix[j] - prefix[i] === k) count++;
    }
  }
  return count;
};
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2

// 哈希表：边走边记前缀和出现次数。O(n)
var subarraySumHash = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let count = 0;
  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
console.log(subarraySumHash([1, 1, 1], 2)); // 2
console.log(subarraySumHash([1, 2, 3], 3)); // 2
