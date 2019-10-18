function getFib(n) {
  let arr = [0, 1]
  let counter = 3
  while( counter <= n) {
    const getFib = arr[0] + arr[1]
    arr[0] = arr[1]
    arr[1] = getFib
  }
  return n > 1 ? arr[1] : arr[0]
}