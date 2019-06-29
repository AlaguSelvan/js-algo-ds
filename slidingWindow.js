function maxSubArraySumNaive(arr, num) {
  // w/o sliding window
if(arr.length < num) return null
let max = -Infinity
let temp
for (let i = 0; i < arr.length - num + 1; i++){
  temp = 0
  for ( let j = 0; j < num; j++) {
    temp += arr[i + j]
  }
  if ( temp > max) {
    max = temp
  }
}
return max
}

maxSubArraySumNaive([1, 6, 3, 4, 5, 2, 1], 3)

// with sliding window
function maxSubArraySum(arr, num) {
if(arr.length < num) return null
let maxSum = 0
let tempSum = 0
for ( let i = 0; i < num; i++) {
  maxSum += arr[i]
}
tempSum = maxSum

for ( let j = num; j < arr.length; j++) {
  tempSum = tempSum - arr[j - num] + arr[num]
  if (tempSum > maxSum) {
   maxSum = tempSum 
  }
}
return maxSum
}

maxSubArraySum([1, 6, 3, 4, 5, 2, 1], 3)
