const fs = require("fs")

fs.renameSync("your-files-here/config.js", "your-files-here/project_config.js")

console.log("Config.js file renamed!")

// Async version of renameSync
// fs.rename("your-files-here/config.js", "./project_config.js", function (err) {
//   if (err) {
//     throw err
//   }

//   console.log("Async renaming has been successful!")
// })