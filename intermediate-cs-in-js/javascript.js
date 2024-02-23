// javascript, why?
function add(x, y) {
  return x + y
}

const result = add([], '2')
console.log(result)

const rectangle = { height: 2, width: 4 }
const area = rectangle.width * rectangle.height
console.log(area)

console.log(4 / [])

function trimString(string) {
  return string.trim()
}

const goodUseOfTrim = trimString(`       Owen       `)
console.log(goodUseOfTrim)

const badUseOfTrim = trimString(56)
console.log(badUseOfTrim)
