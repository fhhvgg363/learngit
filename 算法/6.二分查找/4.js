// 33. 搜索旋转排序数组：先二分找旋转点（最小值下标），再在有序的一侧二分
var search = function (nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  const pivot = left;

  const binarySearch = function (l, r) {
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) l = mid + 1;
      else r = mid - 1;
    }
    return -1;
  };

  if (target >= nums[pivot] && target <= nums[n - 1]) {
    return binarySearch(pivot, n - 1);
  }
  return binarySearch(0, pivot - 1);
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
