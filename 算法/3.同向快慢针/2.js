// 移除元素27
var removeElement = function (nums, val) {
  let j = 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      const tmp = nums[j];
      nums[j] = nums[i];
      nums[i] = tmp;
      j++;
    } else {
      k += 1;
    }
  }
  nums.splice(nums.length - k, k);
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
