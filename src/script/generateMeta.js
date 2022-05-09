const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const keyword_extractor = require("keyword-extractor");
const getTree = require("./getTree");

const frequencyArray = (array) =>
  array
    .reduce((p, c) => {
      const id = p.findIndex((i) => i.word === c);
      if (id >= 0) {
        p[id].count += 1;
      } else {
        p.push({ word: c, count: 1 });
      }
      return p;
    }, [])
    .sort((a, b) => b.count - a.count)
    .filter((x) => /^[a-zA-Z]+$/.test(x.word))
    .slice(0, 25)
    .map((x) => x.word);

const generateKeywords = (file) => {
  const contentKeywords = keyword_extractor.extract(file, {
    language: "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: false,
  });
  return frequencyArray(contentKeywords).join(", ");
};

const generateDateString = (data) => {
  if (isNaN(Date.parse(data.date))) return undefined;
  return new Date(data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const generateRoute = (filePath) =>
  filePath
    .replace("src/pages", "")
    .replace(/\.[a-zA-Z]+$/, "")
    .replaceAll(path.sep, "/")
    .replace("/index", "");

const getMetadata = (filePath) => {
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);
  return {
    ...data,
    generatedKeywords: generateKeywords(content),
    dateString: generateDateString(data),
    route: generateRoute(filePath),
  };
};

const meta = getTree("./src/pages/")
  .filter((x) => /\.md|\.mdx/.test(x))
  .map((x) => getMetadata(x));

if (!fs.existsSync("./generated")) {
  fs.mkdirSync("./generated");
}
fs.writeFileSync("./generated/siteMeta.json", JSON.stringify(meta));
