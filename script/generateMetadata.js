const fs = require("fs");
const matter = require("gray-matter");
const getTree = require("./getTree");
const addExtraMetadata = require("./addExtraMetadata.js");

const meta = getTree("./src/pages/")
  .filter((x) => /\.md|\.mdx/.test(x))
  .map((x) => {
    const fileContent = fs.readFileSync(x);
    const { data, content } = matter(fileContent);
    return addExtraMetadata(data, x, content);
  });

if (!fs.existsSync("./generated")) {
  fs.mkdirSync("./generated");
}
fs.writeFileSync("./generated/siteMeta.json", JSON.stringify(meta, null, 2));
