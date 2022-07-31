const fs = require("fs");
const path = require("path");

const getTree = (root) => {
  const files = [];
  fs.readdirSync(root).forEach((f) => {
    const filePath = path.join(root, f);
    if (fs.lstatSync(filePath).isDirectory()) {
      files.push(...getTree(filePath));
    } else {
      files.push(path.join(root, f));
    }
  });
  return files;
};

module.exports = getTree;
