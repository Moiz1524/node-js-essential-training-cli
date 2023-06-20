const fs = require("fs")

if (fs.existsSync("your-files-here")) {
  console.log("File exists already!")
} else {
  fs.mkdir("your-files-here", function(err) {
    if (err) {
      throw err
    } else {
      console.log("directory created!")    
    }
  })
}
