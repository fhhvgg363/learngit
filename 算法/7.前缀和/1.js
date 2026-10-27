// 238. 除自身以外数组的乘积：答案数组存左积，右边用变量滚。O(n) 时间，O(1) 额外空间
var productExceptSelf = function (nums) {
  const n = nums.length;
  const arr = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    arr[i] = arr[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let j = n - 1; j >= 0; j--) {
    arr[j] *= right;
    right *= nums[j];
  }
  return arr;
};
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
