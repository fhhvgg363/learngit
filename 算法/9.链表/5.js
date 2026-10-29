// 24. 两两交换链表中的节点
var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;
  while (curr != null && curr.next != null) {
    const next = curr.next;
    curr.next = next.next;
    next.next = curr;
    prev.next = next;
    prev = curr;
    curr = curr.next;
  }
  return dummy.next;
};
