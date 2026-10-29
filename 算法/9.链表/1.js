// 创建链表节点 链表的每一个节点都是一个对象；
function ListNode(val, next) {
  this.val = val;
  this.next = next == undefined ? null : next;
}
const NodeList = new ListNode(1, new ListNode(2, new ListNode(3, null)));
function ArrayNode(head) {
  let array = head.reverse();
  const dummy = new ListNode(0);
  let cur = dummy;
  for (const x of array) {
    cur.next = new ListNode(x);
    cur = cur.next;
  }
  return dummy.next;
}
console.log(ArrayNode([1, 2, 3]));

// 206. 反转链表：改 next 的方向，返回新的头结点
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
console.log(reverseList(NodeList));
