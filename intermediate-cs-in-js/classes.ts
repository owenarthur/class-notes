class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

// class Dog extends Animal {

// }

class Barn {
  animals: Animal[]
  constructor() {}

  addAnimal(animal: Animal) {
    this.animals.push(animal)
  }
}

function barnyard() {
  const barn = new Barn()

  const dog = new Animal('Buster')

  barn.addAnimal(dog)

  for (const animal of barn.animals) {
    console.log(animal.name)
  }
}
