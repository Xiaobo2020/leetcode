/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// 方法一；遍历
function reverseList1(head: ListNode | null): ListNode | null {
  let currentPointer: ListNode | null = head;
  let tmpPointer: ListNode | null = head;
  let newHead: ListNode | null = null;
  while(currentPointer) {
    // 暂存当前节点
    tmpPointer = currentPointer;
    // 当前节点指向下一个节点
    currentPointer = currentPointer.next;

    // 处理暂存的节点作为新的头节点
    tmpPointer.next = newHead;
    newHead = tmpPointer;
  }
  return newHead;
};

// TODO: 方法二：递归
/**
 * null >>> null
 * a >>> a
 * a -> b >>> a <- b 
 */
function reverseList2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  const p = reverseList2(head.next.next);
  return p;
}