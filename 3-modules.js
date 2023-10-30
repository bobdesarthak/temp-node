const names = require('./4-names.js')
console.log(names)

const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor')

console.log(data)
n = 'Mansha'
sayHi('Sarthak')
sayHi(n)
sayHi(names.john)
sayHi(names.peter)


require('./7-mind-grenade')  // if there is a function inside a module that we invode
                             // then that code will run
