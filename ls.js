const fs = require("fs");

module.exports = (done) => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) throw error;
    else {
      done(files.join('    '));
    }
  });
}


