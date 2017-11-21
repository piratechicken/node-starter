function formatVanityPlate(string) {
  let words = string.toLowerCase().replace(/\bfor\b|\bfore\b|four/g, 4).replace(/\btoo\b|\btwo\b|\bto\b/g, 2).split(' ')

  if (words.join('').length > 12) {
    return 'ERROR!!! Too many letters! ARRGH! OMFG!'
  }
  else {
    words = words.map(word => word.toUpperCase())
    return words.join('')
  }
}

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)

const two = 'Two cats to the fore'
console.log(`Number plate: ${ formatVanityPlate(two) }`)

console.log(two.length)
/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/