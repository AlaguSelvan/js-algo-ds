function reverseString(s) {
  if (typeof s === 'number') 's.split is not a function'
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