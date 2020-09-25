module.exports = (done) => {
  cachedCwd = process.cwd();
  done(cachedCwd);
}
