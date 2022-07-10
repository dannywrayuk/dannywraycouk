const sharp = require("sharp");
const minimatch = require("minimatch");
const getTree = require("./getTree");
const path = require("path");

const sizes = [300, 600, 1200];

const resize = (filename) =>
  sizes.forEach(
    async (y) =>
      await sharp(filename)
        .resize({ width: y, withoutEnlargement: true })
        .jpeg()
        .toFile(
          filename
            .replace("public", "out")
            .replace(path.extname(filename), "") +
            "@" +
            y +
            path.extname(filename)
        )
  );

getTree("public/img")
  .filter((x) => minimatch(x, "**/*.jpeg"))
  .forEach((x) => resize(x));
