const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === "") return 1

  let count = 0
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length)
      const res = countConstruct(suffix, wordBank, memo)
      if (res === 1) {
        count++
      }
    }
  }
  memo[target] = count
  return memo[target]
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])) //2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) //1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) //0
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])) //0