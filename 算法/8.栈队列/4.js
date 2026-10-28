// 239. 滑动窗口最大值：单调递减队列，队头是当前窗口最大值的下标
var maxSlidingWindow = function (nums, k) {
  const q = [];
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    if (q[0] <= i - k) q.shift();
    if (i >= k - 1) arr.push(nums[q[0]]);
  }
  return arr;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([7, 2, 4], 2)); // [7, 4]
