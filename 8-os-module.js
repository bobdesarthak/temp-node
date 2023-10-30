const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method to return the system up time in seconds
console.log(`The system uptime is ${os.uptime} seconds`)
sec = os.uptime()
console.log(`The system uptime in minutes is ${sec/60}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem() 
}

console.log(currentOS)