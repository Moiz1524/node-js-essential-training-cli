const collectAnswers = require("../custom-events-app/lib/collectAnswers")

const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you doing to do with Node.js?"
]

const answerEvents = collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!")
  console.log(answers)
  process.exit()
})

answerEvents.on("answer", (answer) => {
  console.log(`The answer is ${answer}`)
})
