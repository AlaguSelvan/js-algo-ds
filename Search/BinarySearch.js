function BinarySearch(arr, val) {
 let left = 0;
 let right = arr.length - 1;
 let middle = Math.floor((left + right)/2);
 while (arr[middle] !== val && left < right) {
   if (arr[middle] > val) right = middle - 1;
   else start = middle + 1;
   middle = Math.floor((left + right) / 2);
 }
 return arr[middle] === value ? middle : -1;
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 6))