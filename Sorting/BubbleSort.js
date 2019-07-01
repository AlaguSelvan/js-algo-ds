function BubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr
}

console.log(BubbleSort([8, 7, 6, 5, 4, 3, 2, 1]))