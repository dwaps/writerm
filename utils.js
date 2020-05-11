exports.WritermError = class extends Error {
  constructor(msg) {
    super(`\n\n[DWAPS ERROR]: ┐(\´•_•\`)┌   ===>  ${msg}\n`);
  }
}
