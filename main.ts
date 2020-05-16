// Les fonctions
function isEven (n: number) : boolean {
  return n % 2 === 0
}

console.log(isEven(2))
console.log(isEven(3))

function isEven2 (n: number | string) : boolean {
  if (typeof n === 'string') {
    return Number.parseInt(n) % 2 === 0
  }
  return n % 2 === 0
}

console.log(isEven2(2))
console.log(isEven2(3))
console.log(isEven2("2"))
console.log(isEven2("3"))

function faitDesTrucs (a: number, options: { o1: string, o2: number, o3: boolean[]}) {
    console.log('do')
}

faitDesTrucs(1,{o1:"se lever", o2:7, o3:[true, false]})
