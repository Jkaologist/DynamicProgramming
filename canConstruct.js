const canConstruct = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === "") return true

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length)
      const res = canConstruct(suffix, wordbank, memo)
      if (res === true) {
        memo[target] = true
        return memo[target]
      }
    }
  }
  memo[target] = false
  return memo[target]
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])) // false
