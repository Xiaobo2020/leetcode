/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // 临时变量，用于交换字符串
  let tmp: string;
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    tmp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = tmp
  }
  console.log(s);
};
