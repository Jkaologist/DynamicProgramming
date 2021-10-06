const canSum = (tar, nums, memo = {}) => {
  if (tar in memo) return memo[tar]
  if (tar === 0) return true
  if (tar < 0) return false

  for (let num of nums) {
    const rem = tar - num
    if (canSum(rem, nums, memo)) {
      memo[tar] = true
      return memo[tar]
    }
  }
  memo[tar] = false
  return memo[tar]
}

console.log(canSum(7, [2,3])) // true
console.log(canSum(7, [2,4])) // false
console.log(canSum(300, [7,14])) // false