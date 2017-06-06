console.log('in main.ts, Node', process.version)

const add = (a: number, b: number) => a + b

function sub (a: number, b: number) {
  return a - b
}

console.log('10 + 20', add(10, 20))

class NoPackagesError extends Error {
  constructor (m: string) {
    super(m)
    // Set the prototype explicitly
    Object.setPrototypeOf(this, NoPackagesError.prototype)
  }
}
