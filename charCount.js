function charcount(chars) {
  let obj = {}
  for (let i = 0; i < chars.length; i++) {
    if (obj[chars[i]] > 0) {
      obj[char]++
    } else {
      obj[chars] = 1
    }
  }
  return obj
}

charcount("abcaabcccc")


function frequencyCounter(chars) {
  let obj = {}
  for (let char of chars) {
    char = char.toLowerCase()
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] | 1
    }
  }
  return obj
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0)
  if (!(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)) {
    return false
  }
  return true
}

frequencyCounter("aabbaacc")