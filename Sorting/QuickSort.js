function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start]
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  let swapIdx = start
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, i, swapIdx)
    }
  }
  swap(arr, swapIdx, start)
  return swapIdx
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIdx = pivot(arr, start, end)
    quickSort(arr, start, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, end)
  }
  return arr
}
quickSort([5, 2, 3, 4, 1])