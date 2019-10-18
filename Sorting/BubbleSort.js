function BubbleSort(array) {
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  let noSwaps = false
  while (!noSwaps) {
    noSwaps = true
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        noSwaps = false
      }
    }
  }
  return array
}

console.log(BubbleSort([29, 5, 1, 20, 15, 12, 5, 2, 17, 19, 26, 29, 2, 6, 4]))