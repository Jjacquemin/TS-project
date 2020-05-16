// Le casting
class Animal {
  hasEaten: boolean = false
  
  eat () {
    this.hasEaten = true
    console.log('Miam miam')
  }

  sleep () {
    console.log('Zzz zzz')
  }
}

class Cat extends Animal implements CarnivoreActions {
  sleep () {
    console.log('Sleep 25h a day')
  }

  kill () {
    console.log('Kill like a cat')
  }
}

class Kangaroo extends Animal {

}

interface CarnivoreActions {
  kill: () => void
}

function feedAnimalList (animalList: Animal[]) {
  for (let a of animalList) {
    a.eat()
  }
  return animalList
}

const cat = new Cat()
const kangaroo = new Kangaroo()
const animal = new Animal()
const fedAnimals: Animal[] = feedAnimalList([cat, kangaroo, animal])
const fedCat: Cat = fedAnimals[0] as Cat
fedCat.sleep()

// La généricité

function howManyElement<T> (elements: Array<T>) {
  return elements.length
}

console.log(howManyElement<number> ([1]))
console.log(howManyElement<string> (['un','deux']))
console.log(howManyElement<Animal> (fedAnimals))
