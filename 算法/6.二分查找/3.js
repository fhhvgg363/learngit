// 34. 在排序数组中查找元素的第一个和最后一个位置：两次二分，O(log n)
var searchRange = function (nums, target) {
  const findLeft = function () {
    let left = 0;
    let right = nums.length - 1;
    let ans = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        if (nums[mid] === target) ans = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  };
  const findRight = function () {
    let left = 0;
    let right = nums.length - 1;
    let ans = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        if (nums[mid] === target) ans = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return ans;
  };
  return [findLeft(), findRight()];
};
console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([1], 1)); // [0, 0]
