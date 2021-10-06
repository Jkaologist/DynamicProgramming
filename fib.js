// time complexity o(2^n) => o(n)
// space complexity o(n) => o(n)

// JS object with keys that will be the argument to the function 
// and the values will be the return value
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n === 1 || n == 2) return 1
  memo[n] = fib(n-2, memo) + fib(n-1, memo)
  return memo[n]
}

console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(50))