const fs = require("fs")

fs.unlinkSync("your-files-here/config.js")

// Async version of unlinkSync
// fs.unlink("config.js", function (err) {
//   if (err) {
//     throw err
//   }
//   console.log("Config is gone!")
// })