// 盛水最多的容器
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let squre = Math.min(height[right], height[left]) * (right - left);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    max = Math.max(max, squre);
  }
  return max;
};
