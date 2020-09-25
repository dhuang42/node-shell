const { link } = require('fs');
const { url } = require('inspector');
const request = require('request');



module.exports = (link, done) => {
  request(link, function (err, response, printedHtml) {
    if (err) throw error;
    else {
      done(printedHtml);
    }
  });
}
