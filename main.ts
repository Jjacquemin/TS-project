// Les classes
class Hero {
  protected _type: string  
  constructor () {
    console.log('A new hero is born')
  }
}
class Warrior extends Hero {
  private _name: string
  public arme: string
  constructor () {
    super ()
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

let w: Warrior
w = new Warrior()
w.setName('Conan')
w.setType('Warrior')
w.arme = 'Epée'
console.log(w.getName())
console.log(w.getType())
console.log(w.arme)

class Warrior2 extends Hero {
    private _name: string
    constructor () {
      super ()
    }
    get name (): string {
      return this._name
    }
    set name (name: string) {
      this._name = name
    }
  }
  
  let w2: Warrior2
  w2 = new Warrior2()
  w2.name = 'Conan'
  console.log(w2.name)
  