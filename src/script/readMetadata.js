const { readFileSync } = require("fs");

const readMetadata = () => {
  return JSON.parse(readFileSync("./generated/siteMeta.json"));
};
module.exports = { readMetadata };
