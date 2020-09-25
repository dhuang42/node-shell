const { link } = require('fs');
const { url } = require('inspector');
const request = require('request');



function printPage(link) {
  request(link, function (err, response, printedHtml) {
    if (err) throw error;
    else {
      process.stdout.write(printedHtml);
      process.stdout.write("\nprompt > ");
    }
  });
}

module.exports.printPage = printPage;
