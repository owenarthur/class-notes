function copyArray(array: string[]): string[] {
  let newArray: string[] = []

  // // ye olde javascripte
  for (let i = 0; i++; i < array.length) {
    const item = array[i]
    newArray.push(item)
  }

  // // more modern
  for (const item of array) {
    newArray.push(item)
  }

  // // more functional
  array.forEach((item) => newArray.push(item))

  const simpleMapArray = array.map((item) => item)

  // see a lot of this these days
  return [...array]
}

function copyObject(object: Record<string, unknown>) {
  return { ...object }
}
