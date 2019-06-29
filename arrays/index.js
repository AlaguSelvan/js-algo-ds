function arrayRotation(arr, num) {
  // impure function
  let tempArr = arr.splice(0, num)
  arr = arr.concat(tempArr)
  return arr
}

arrayRotation([1, 2, 3, 4, 5, 6, 7], 2)