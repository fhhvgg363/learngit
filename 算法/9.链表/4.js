// 2. 两数相加
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let cur = dummy;
  let carry = 0;
  while (l1 != null || l2 != null) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
  }
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return dummy.next;
};
