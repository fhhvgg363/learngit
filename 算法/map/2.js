// 给定数组 nums 和目标值 target，返回两个数的下标，使它们相加等于 target。
// 每个输入只有一组答案，不能使用同一个元素两次。
// 两数之和
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) {
      return [map.get(need), i];
    }
    map.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
