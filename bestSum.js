const bestSum = (tar, nums, memo = {}) => {
  if (tar in memo) return memo[tar]
  if (tar === 0) return []
  if (tar < 0) return null

  let shortest = null

  for (let num of nums) {
    const rem = tar - num
    const result = bestSum(rem, nums, memo)
    if (result !== null) {
      const combination = [...result, num]
      if (shortest === null || combination.length < shortest.length) {
        shortest = combination
      }
    }
  }
  memo[tar] = shortest
  return memo[tar]
}

console.log(bestSum(8, [1,4,5])) //[4,4]
console.log(bestSum(8, [2,3,5])) // [3,5]
console.log(bestSum(100, [1,2,5,25])) // [25,25,25,25]