function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }
    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
function isAlphaNumeric(char) {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9") ||
    (char >= "A" && char <= "Z")
  );
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
