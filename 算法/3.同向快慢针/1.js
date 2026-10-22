// 283. 移动零（同向快慢针标准写法）
// i 快指针扫全数组，j 慢指针指向下一个非零该放的位置
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const tmp = nums[j];
      nums[j] = nums[i];
      nums[i] = tmp;
      j++;
    }
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // [1, 3, 12, 0, 0]
