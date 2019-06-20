function charcount(chars) {
  let obj = {}
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i]
    if (obj[char] > 0) {
      obj[char]++
    } else {
      obj[char] = 1
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
      obj[char] = ++obj[char] + 1
    }
  }
  return obj
}

function isAlphaNumeric(char){
  let code = char.charCodeAt(0)
  let validation = !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  if (validation) {
       return false
     }
     return true
}

frequencyCounter("aabbaacc")