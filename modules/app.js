// const myModule = require("./my_module")
// // const { inc, dec, getCount } = require("./myModule")

// console.log(myModule.anything)
// console.log(myModule.inc())

const events = require("events")

let emitter = new events.EventEmitter()

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`)
})

emitter.emit("customEvent", "Hello World", "Computer")
emitter.emit("customEvent", "That's pretty cool", "Moiz")

process.stdin.on("data", (data) => {
  const input = data.toString().trim()

  if (input === "exit") {
    emitter.emit("customEvent", "Goodbye!", "process")
    process.exit()
  }

  emitter.emit(
    "customEvent", 
    data.toString().trim(),
    "terminal"
  )
})