function linearSearch(arr, vals) {
  for (let i in arr) {
    if (arr[i] === vals) {
      return i
    } else {
    }
  }
  return -1
}
linearSearch([1, 2, 3, 5, 4, 4], 5)