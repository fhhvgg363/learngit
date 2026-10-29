// 203. 移除链表元素 创建一个虚拟头节点，然后遍历链表，如果当前节点的值等于 val，则删除当前节点，否则继续遍历
var removeElements = function (head, val) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;
  while (curr != null) {
    const next = curr.next;
    if (curr.val === val) {
      prev.next = next;
    } else prev = curr;
    curr = next;
  }
  return dummy.next;
};
console.log(removeElements(NodeList, 2));
