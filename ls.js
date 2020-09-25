const fs = require("fs");

function printDirectory() {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) throw error;
    else {
      process.stdout.write(files.join("    "));
      process.stdout.write("\nprompt > ");
    }
  });
}

module.exports.printDirectory = printDirectory;
