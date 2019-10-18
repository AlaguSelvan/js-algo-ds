function maxSequence(arr) {
  let currMax = 0
  let maxSoFar = 0
  const allPositives = arr => arr.every(n => n > 0)
  const allNegatives = arr => arr.every(n => n < 0)
  if (arr.length === 0 || allNegatives(arr)) return 0
  let temp = { start: 0, sum: 0 }
  let result = { start: 0, end: 0, sum: 0 }
  for (let i of arr) {
    temp.sum += i
    if (temp.sum > result.sum) {
      temp.start = i
      result.sum = temp.sum
    }
    if (temp.sum < 0) {
      temp.sum = 0
      temp.start = i + 1
    }
  }
  console.log(temp)
  console.log(result)
  return result
}
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//     t   r