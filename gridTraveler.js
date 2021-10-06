var a = performance.now();
const gridTraveler = (m, n, memo = {}) => {
  const key = `${m},${n}`
  const rkey = `${n},${m}`
  // super optomized reverse key check
  if (key in memo) return memo[key]
  if (rkey in memo) return memo[rkey]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  memo[rkey] = memo[key]
  return memo[key]
}
gridTraveler(1500,1500)
var b = performance.now();
alert('It took ' + (b - a) + ' ms.');
