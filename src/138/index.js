/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function CNode (val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

/**
 * @param {CNode} head
 * @return {CNode}
 */
var copyRandomList = function(head) {
    if (!head) {
        return head;
    }
    let originPointer = head;
    // 遍历链表，在每个原始节点后添加新的节点
    while(originPointer) {
        // 拷贝一个新的节点：带val和next
        const copiedNode = new CNode(originPointer.val, originPointer.next, null);
        // 原始节点next指向变更为拷贝的新节点
        originPointer.next = copiedNode;
        // 获取下一个originNode
        originPointer = copiedNode.next;
    }
    // 初始化为链表头节点
    originPointer = head;
    // 遍历链表，对新节点处理处理random指向
    while(originPointer) {
        const copiedNode = originPointer.next;
        const originRandomPointer = originPointer.random;
        // 存在两种情况：1. 原始节点的random为空；2. 原始节点的random不为空
        copiedNode.random = originRandomPointer ? originRandomPointer.next : originRandomPointer;
        // 获取下一个originNode
        originPointer = copiedNode.next;
    }

    originPointer = head;
    const copiedHeader = originPointer.next;
    // 断开原始链表和拷贝后的链表
    while(originPointer) {
        // 获取原始节点的后一个拷贝节点
        const copiedNode = originPointer.next;
        // 原始节点next指向下一个原始节点
        originPointer.next = copiedNode.next;
        // 重置原始节点为下一个原始节点
        originPointer = copiedNode.next;
        // 拷贝节点指向下一个拷贝节点，两种情况
        // 1. 当前拷贝节点为最后一个拷贝节点
        // 2. 当前拷贝节点不是最后一个拷贝节点
        copiedNode.next = originPointer ? originPointer.next : originPointer;
    }
    return copiedHeader;
};