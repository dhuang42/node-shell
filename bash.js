const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require('./cat.js');
const curl = require('./curl.js');
const date = require('./date.js');

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let filename = '';
  const cmd = data.toString().trim().split(' ')[0];
  if (cmd === "pwd") pwd(done);

  if (cmd === "ls") ls(done);

  if (cmd === 'date') date(done)

  if(data.includes(' ')) {
    filename = data.toString().trim().split(' ')[1];
    if (filename[0] !== '.') {
      if (filename[0] !== 'h') filename = `./${filename}`
    };
  }

  if (cmd === 'cat') cat(filename, done);

  if (cmd === 'curl') curl(filename, done);

  ;
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ")
}
