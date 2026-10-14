//反转字符串
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let middle = s[left];
    s[left] = s[right];
    s[right] = middle;
    left++;
    right--;
  }
};
