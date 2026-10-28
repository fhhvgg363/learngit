// 394. 字符串解码：数字栈 + 字符串栈，遇到 ] 弹出并重复
var decodeString = function (s) {
  const numStack = [];
  const strStack = [];
  let num = 0;
  let str = "";
  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      num = num * 10 + Number(ch);
    } else if (ch === "[") {
      numStack.push(num);
      strStack.push(str);
      num = 0;
      str = "";
    } else if (ch === "]") {
      const times = numStack.pop();
      const prev = strStack.pop();
      str = prev + str.repeat(times);
    } else {
      str += ch;
    }
  }
  return str;
};
console.log(decodeString("3[a]2[bc]")); // aaabcbc
console.log(decodeString("3[a2[c]]")); // accaccacc
console.log(decodeString("2[abc]3[cd]ef")); // abcabccdcdcdef
