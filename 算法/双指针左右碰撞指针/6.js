// 接雨水
var trap = function (height) {
  let n = height.length;
  let left = 0;
  let right = n - 1;
  let sum = 0;
  let hlmax = 0;
  let hrmax = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      hlmax = Math.max(hlmax, height[left]);
      if (height[left] < hlmax) {
        sum += hlmax - height[left];
      }
      left++;
    } else {
      hrmax = Math.max(hrmax, height[right]);
      if (height[right] < hrmax) {
        sum += hrmax - height[right];
      }
      right--;
    }
  }
  return sum;
};
