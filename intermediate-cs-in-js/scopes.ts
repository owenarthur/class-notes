// //scope
const topLevel = 'top level'

function local() {
  const midLevel = 'mid level'

  const array = []
  for (const item of array) {
    const lowestLevel = 'lowest level'
  }
}

// closures

function counter() {
  let count = 0
  return function countUp() {
    count++
    console.log(count)
  }
}

const countUpFunction = counter()

countUpFunction() // 1
countUpFunction() // 2
countUpFunction() // 3
