module.exports = (done) => {
  let currentDate = new Date();

  let date = currentDate.toDateString();
  let time = currentDate.toLocaleTimeString();

  let returnedValue = `${date} ${time}`
  done(returnedValue);
}
