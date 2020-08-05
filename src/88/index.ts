/**
 Do not return anything, modify nums1 in-place instead.
 */

// 思路一：时间复杂度O(m + n)，空间复杂度O(m + n)
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  // 定义两个指针分别指向nums1和nums2，每次分别比较，取较小值暂存并较小值指针+1
  
  // 初始化指针位置
  let i = 0, j = 0;
  const tmp: number[] = [];
  // 循环条件：指针还可以移动
  while(i < m || j < n) {
    if (i === m) {
      // 第一个数组已经结束
      tmp.push(nums2[j]);
      j++;
    } else if (j === n) {
      // 第二个数组已经结束
      tmp.push(nums1[i]);
      i++;
    } else if (nums1[i] <= nums2[j]) {
      // 第一个数组值较小
      tmp.push(nums1[i]);
      i++
    } else if (nums1[i] > nums2[j]) {
      // 第二个数组值较小
      tmp.push(nums2[j]);
      j++;
    }
  }
  for (let idx = 0; idx < tmp.length; idx++) {
    nums1[idx] = tmp[idx];
  }
};

// 思路二：时间复杂度O(m + n)，空间复杂度O(1)
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  // 利用nums1的空间，从后往前存
  let i = m - 1; // nums1最后一个未合并元素的index
  let j = n - 1; // nums2最后一个未合并元素的index
  let p = m + n - 1; // 当前需要合并元素的index
  while(i > -1 || j > -1) {
    if (i === -1) {
      // 第一个数组已经到底
      nums1[p] = nums2[j];
      p--;
      j--;
    } else if (j === -1) {
      // 第二个数组已经到底
      nums1[p] = nums1[i];
      p--;
      i--;
    } else if (nums1[i] >= nums2[j]) {
      // 第一个数组值较大
      nums1[p] = nums1[i];
      p--;
      i--;
    } else if (nums1[i] < nums2[j]) {
      // 第二个数组值较大
      nums1[p] = nums2[j];
      p--;
      j--;
    }
  }
}