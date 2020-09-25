function wrappedCwd() {
  cachedCwd = process.cwd();
  process.stdout.write(cachedCwd);
  process.stdout.write("\nprompt > ");
}

module.exports.wrappedCwd = wrappedCwd;
