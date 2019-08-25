let threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  let targetSum = 0
  let left = 0
  let current = left + 1
  let right = nums.length - 1
  let result = []
  while (left < right) {
    let tempSum = nums[left] + nums[current] + nums[right]
    if (tempSum === targetSum) {
      result.push([nums[left], nums[current], nums[right]])
      current++
    } else if (tempSum < targetSum) {
      left++
    } else if (tempSum > targetSum) {
      right--
    }
    if (current === right) {
      current++
      left = current + 1
      right = nums.length - 1
    }
  }
  return result
}
threeSum([-1, 0, 1, 2, -1, -4])
