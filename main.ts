// Les décorateurs
@classLogger("")
class UneClasse {
  @propertyLogger
  private _uneVariable: string
  constructor(v: string) {
    this._uneVariable = v
  }
  @methodLogger()
  multiply (a: number, b: number) {
    return a * b
  }
  @methodLogger()
  toPlural (words: string[]) {
    return words.map((t: string)=>t+'s')
  }
  get uneVariable () {
    return this._uneVariable
  } 
  set uneVariable (v: string) {
    this._uneVariable = v
  }
}

function classLogger (param: string) {
  return function(classConstructor: Function) {
    console.log(`classLogger() ${classConstructor}.`)
  }
}

function methodLogger() {
  return function(target: Object, methodName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
    const method: Function = propertyDescriptor.value
    propertyDescriptor.value = function (...methodArguments: any[]) {
      const result = method.apply(this, methodArguments)

      console.log(`La fonction ${methodName} est appelée avec les paramètres ${methodArguments} et le résultat est ${result}.`)
    }
    return propertyDescriptor
  }
}

function propertyLogger(target: Object, propertyName: string) {
  let propertyValue = this[propertyName]
  const getterWithLogger = () => {
    console.log(`Get : ${propertyName} => ${propertyValue}.`)
    return propertyValue
  }
  const setterWithLogger = (newVal) => {
    console.log(`Set : ${propertyName} => ${newVal}.`)
    propertyValue = newVal
  }
  Object.defineProperty(target, propertyName, {
    get : getterWithLogger,
    set : setterWithLogger,
    enumerable : true,
    configurable : true
  })
}

const u = new UneClasse("test")
u.multiply(2,3)
u.toPlural(['boy','girl'])
u.uneVariable
u.uneVariable = 'Modif'
