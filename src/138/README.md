## [138. 复制带随机指针的链表](https://leetcode-cn.com/problems/copy-list-with-random-pointer/)


### 思路

1. 遍历原始节点在每个节点后面插入一个新的拷贝节点即 `a -> a' -> b -> b'`
2. 遍历原始节点，根据每个原始节点的random设置拷贝节点的random，注意random为空的情况
3. 遍历原始节点，分离原始节点链表和拷贝节点链表，注意最后一个节点的next为空的情况，即得到 `a -> b` 和 `a' -> b'`

> 时间复杂度为`O(n)`， 空间复杂度为`O(1)`