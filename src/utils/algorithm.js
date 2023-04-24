// 笛卡尔积排列组合 descartFn([[1, 2], ['a', 'b']])
export const descartFn = function(nums) {
  return nums.reduce((a, b) => {
    const m = a.map(item => b.map(i => [i].concat(item)));
    return m.reduce((c, d) => c.concat(d), []);
  });
};
