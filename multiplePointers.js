// w/o pointer
function sumZeroOld(arr) {
  for ( let i = 0; i < arr.length; i++) {
    for ( let j = i + 1; j< arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
  return false
}

sumZeroOld([-3, -2, -1, 0, 1, 2, 3])

// with pointer
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return arr[left], arr[right]
    } else if (sum > 0) {
      right--
    } else if (sum < 0) {
      left++
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3])

function uniqueVals(arr) {
  if (arr.length === 0) return 0
let i = 0
for ( let j = 1; j < arr.length; j++) {
  if (arr[i] !== arr[j]) {
    i++
    arr[i] = arr[j]
  }
}
return i + 1
}

uniqueVals([1, 1, 2, 3, 3, 4])