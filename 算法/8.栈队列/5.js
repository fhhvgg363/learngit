//224. 基本计算器
var calculate = function (s) {
  const stack = [];
  let sum = 0;
  let sign = 1;
  let num = 0;
  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      num = num * 10 + Number(ch);
    } else if (ch === "+" || ch === "-") {
      sum += sign * num;
      num = 0;
      sign = ch === "+" ? 1 : -1;
    } else if (ch === "(") {
      stack.push(sum);
      stack.push(sign);
      sum = 0;
      sign = 1;
      num = 0;
    } else if (ch === ")") {
      sum += sign * num;
      num = 0;
      sum *= stack.pop();
      sum += stack.pop();
      sign = 1;
    }
  }
  return sum + sign * num;
};
