// Don't do this!

Array.prototype.map = () => {
  throw new Error('No mapping!!')
}

const fruits = ['Apple', 'Pear', 'Peach']

fruits.map((f) => console.log(f))
