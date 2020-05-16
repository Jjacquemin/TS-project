// Déclaration et symbol
const sym1 = Symbol(0)
/*
via la commande tsc -w main.ts
main.ts(2,12): error TS2585: 'Symbol' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.
via la commande tsc -w maint.ts --target es6
ok
*/
const sym2 = Symbol('key')
const sym3 = Symbol(0)
const getBlabla = Symbol('getBlabla')
console.log(sym1)
console.log(sym2)
console.log(sym3)
console.log(sym1 === sym3)

const obj = {
  [sym1]: 'xxxx',
  [getBlabla] () {
    return 'blabla'
  }
}
console.log(obj[sym1])
console.log(obj[getBlabla]())
