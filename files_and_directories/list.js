const fs = require("fs")

// let files = fs.readdir("./", function (err, files) {
//   if (err) {
//     throw err
//   }

//   console.log(files)
// })

// console.log("reading files...")

// fs.readFile("README.md", "UTF-8", (err, ipsum) => {
//   console.log(ipsum)
// })

// console.log("reading the file ...")

let md = `
  This is a New File
  ==================

  ES6 Template Strings are cool, They honor whitespace.

  * Template Strings
  * Node File System
  * Readline CLIs
`

fs.writeFile("javascript.md", md.trim(), function(err) {
  if (err) {
    throw err
  }

  fs.appendFileSync(
    "javascript.md", 
    "\n\n### Node.js everyone"
  )
  
  console.log("Markdown Created")
})