const howSum = (tar, nums, memo = {}) => {
  if (tar in memo) return memo[tar]
  if (tar === 0) return []
  if (tar < 0) return null

  for (let num of nums) {
    let rem = tar - num
    const res = howSum(rem, nums, memo)
    if (res !== null) {
      memo[tar] = [...res, num]
      return memo[tar]
    }
  }
  memo[tar] = null
  return memo[tar]
}

console.log(howSum(7, [5,3,4,7])) // [7] || [3,4]
console.log(howSum(8, [5,3,2])) // [2,2,2,2] || [3,5]
console.log(howSum(7, [2,4])) // null
console.log(howSum(0, [1,2,3])) // []
console.log(howSum(300, [7,14])) // null
console.log(howSum(300, [299,3])) // null