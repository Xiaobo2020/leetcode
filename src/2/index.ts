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
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// 方法一：时间复杂度O(max(m, n))，空间复杂度O(m + n)
// 循环条件：l1存在 || l2存在 || 进位存在
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let cover = 0;
  let ret = new ListNode(0, null);
  let tmp = ret;
  while(l1 !== null || l2 !== null || cover !== 0) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const z = x + y + cover;
    // 创建新节点
    cover = Math.floor(z / 10);
    const newNode = new ListNode(z % 10, null);
    tmp.next = newNode;
    tmp = newNode;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return ret.next;
};