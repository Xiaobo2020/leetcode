// 思路一：时间复杂度O(n^2)
function twoSum1(nums: number[], target: number): number[] {
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 获取当前元素
    const currentNum = nums[i];
    // 遍历当前值后面的数组
    for (let j = i + 1; j < nums.length; j++) {
      // 判断两数之和是否匹配
      if (currentNum + nums[j] === target) {
        return [i, j];
      }
    }
  }
  
  // 无结果，返回空数组
  return [];
}

// 思路二：时间复杂度O(n)
function twoSum2(nums: number[], target: number): number[] {
  // 初始化一个缓存字典，key为数组中的值，value为对应值的index
  const map: Record<string, number> = {};

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 获取当前值
    const currentNum = nums[i];
    // 目标剩余值
    const targetNum = target - currentNum;
    if (map[targetNum] !== undefined) {
      // 缓存字典中存在对应目标剩余值
      // 返回目标剩余值对应index和当前值index
      return [map[targetNum], i];
    } else {
      // 不存在，将当前值存入缓存字典
      map[currentNum] = i;
    }
  }

  // 无结果，返回空数组
  return [];
};
