// Les classes
class Hero {
  protected _type: string  
  constructor () {
    console.log('A new hero is born')
  }
}
class Warrior extends Hero {
  private _name: string
  public caracteristics: ICaracteristic
  constructor (caracteristics: ICaracteristic) {
    super ()
    this.caracteristics = caracteristics
  }
  getName (): string {
    return this._name
  }
  setName (name: string): void {
    this._name = name
  }
  getType (): string {
    return this._type
  }
  setType (type: string): void {
    this._type = type
  }
}

// Les interfaces

interface ICaracteristic {
  strength: number,
  intelligence: number,
  weapon: string,
  agility?: number, // pour rendre facultatif
  speed: number,
  gender: 'Male' | 'Female', // pour limiter la saisie à une liste
  onAttack: (damage: number) => void
}

const carac: ICaracteristic = {strength:10, intelligence:1, weapon:'axe', speed: 7, gender:'Male',onAttack: (damage: number) => console.log('Le personnage a infligé '+damage+' de dégât')}

const w: Warrior = new Warrior(carac)
w.setName('Conan')
console.log(w.getName())
console.log(w.caracteristics)
w.caracteristics.onAttack(5)

const carac2: ICaracteristic = {strength:4, intelligence:9, weapon:'sword', agility: 5, speed: 8, gender:'Male',onAttack: (damage: number) => console.log('Le personnage a infligé '+damage+' de dégât')}

const w2: Warrior = new Warrior(carac2)
w2.setName('Kull')
console.log(w2.getName())
console.log(w2.caracteristics)
w2.caracteristics.onAttack(3)

// Héritage entre interface

interface Shape {
  readonly color: string // propriété uniquement instanciable à la construction comme const
}

interface Square extends Shape {
  size: number
}

const s: Square = {
  size: 5, color: "red"
}

console.log (s)
s.size = 10
console.log (s)
//s.color = 'red' pas permis

// Implémentation d'une interface par une classe

class mySquare implements Square {
  size: number
  color: string
  constructor(square: Square) {
    this.size = square.size
    this.color = square.color
  }
}

// Union d'interfaces

interface Identity {
  firstName: string,
  lastName: string
}

interface Size {
  height: number,
  weight: number
}

const human: Identity & Size = {
  firstName: 'John',
  lastName: 'Rambo',
  height: 180,
  weight: 80
}

