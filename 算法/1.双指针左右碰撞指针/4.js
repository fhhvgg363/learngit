// 双指针：从两头比较平方，大的放到结果末尾
var sortedSquares = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let k = nums.length - 1;
  const arr = new Array(nums.length);

  while (i <= j) {
    const left = nums[i] * nums[i];
    const right = nums[j] * nums[j];
    if (left > right) {
      arr[k] = left;
      i++;
    } else {
      arr[k] = right;
      j--;
    }
    k--;
  }
  return arr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
