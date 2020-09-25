const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require('./cat.js');
const curl = require('./curl.js');

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(' ')[0];
  if (cmd === "pwd") pwd.wrappedCwd();
  if (cmd === "ls") ls.printDirectory();
  let filename = data.toString().trim().split(' ')[1];
  if (filename[0] !== '.') {
    if (filename[0] !== 'h') filename = `./${filename}`
  };
  console.log(filename);
  if (cmd === 'cat') cat.printFile(filename);

  if (cmd === 'curl') curl.printPage(filename);

  /*
  process.stdout.write("You typed " + cmd);
  process.stdout.write("\nprompt > ");
  */
});
