function reverseString(s) {
  let revStr = ''
  try {
    for (let i = s.length - 1; i > -1; i--) {
      revStr = revStr + s[i]
    }
  } catch(e) {
    return e.message
  }
  return revStr
}

console.log(reverseString('abcdef'))

function areThereDuplicates(...args) {
  let obj = {}
  for (let arg of args) {
    if (obj[arg]) {
      return true
    } else {
      obj[arg] = 1
    }
  }
  return false
}

console.log(areThereDuplicates(0, 1, 1, 2))

function factorial(n) {
  let output = n
  for (let i = n - 1; i > 0; i--) {
    output = output * i;
  }
  return output;

}

factorial(4)