function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let obj1 = {}
  let obj2 = {}
  for (let vals of arr1) {
    obj1[vals] = ++obj1[vals] || 1
  }
  for (let vals of arr2) {
    obj2[vals] = ++obj2[vals] || 1
  }
  for (let keys in obj1) {
    if (!(keys ** 2 in obj2)) {
      return false
    }
    if (obj2[keys ** 2] !== obj1[keys]) {
      return false
    }
  }
  return true
}
frequencyCounter([2, 2, 1], [1, 4, 4])

function frequencyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctedIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctedIndex === -1) {
      return false
    }
    arr2.splice(correctedIndex)
  }
  return true
}

same([2, 3, 1], [1, 4, 9])

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let lookup = {}
  for (let vals of str1) {
    lookup[vals] ? lookup[vals] += 1 : lookup[vals] = 1
  }
  for (let vals of str2) {
    !lookup[vals] ? false : lookup[vals] -= 1
  }
  return true
}

anagram('cinema', 'iceman')
