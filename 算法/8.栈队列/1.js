// 20. 有效的括号：左括号入栈，右括号与栈顶配对
var isValid = function (s) {
  const stack = [];
  const pair = { "(": ")", "{": "}", "[": "]" };
  for (const ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else {
      if (pair[stack.pop()] !== ch) return false;
    }
  }
  return stack.length === 0;
};
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("(((")); // false
