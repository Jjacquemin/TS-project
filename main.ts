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

export default class Cat extends Animal implements CarnivoreActions {
  sleep () {
    console.log('Sleep 25h a day')
  }

  kill () {
    console.log('Kill like a cat')
  }
}

class Kangaroo extends Animal {

}

export {Kangaroo as K}

interface CarnivoreActions {
  kill: () => void
}

function feedAnimalList (animalList: Animal[]) {
  for (let a of animalList) {
    a.eat()
  }
  return animalList
}

// Namespace

namespace Validator {

  interface IStringValidator {
    isValid:(s: string) => boolean
  }

  export class LetterOnlyValidator implements IStringValidator {
    isValid (s:string) {
      return !/\d/.test(s) // vérifie qu'il n'y a pas de chiffre dans la string
    } 
  }
}

const letterValidator = new Validator.LetterOnlyValidator()

console.log(letterValidator.isValid('231ZERZErezr'))
console.log(letterValidator.isValid('fqfq231ZERZErezr'))
console.log(letterValidator.isValid('ZERZErezr'))

namespace Validator {
    export class ZipCodeOnlyValidator implements IStringValidator {
    isValid (s:string) {
      return /\d{5}/.test(s) // vérifie qu'il n'y a pas de chiffre dans la string
    } 
  }
}

const zipCodeValidator = new Validator.ZipCodeOnlyValidator()

console.log(zipCodeValidator.isValid('231ZE'))
console.log(zipCodeValidator.isValid('59139'))

