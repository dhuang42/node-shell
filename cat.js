const fs = require("fs");

function printFile(filename) {
  fs.readFile(filename, "utf8", (err, file) => {
    if (err) throw error;
    else {
      process.stdout.write(file);
      process.stdout.write("\nprompt > ");
    }
  });
}

module.exports.printFile = printFile;
