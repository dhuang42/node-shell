const fs = require("fs");

module.exports = (filename, done) => {
  fs.readFile(filename, "utf8", (err, file) => {
    if (err) throw error;
    else {
      done(file);
    }
  });
}
