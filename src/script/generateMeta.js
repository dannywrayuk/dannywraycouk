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
    .replace("src" + path.sep + "pages", "")
    .replace(/\.[a-zA-Z]+$/, "")
    .replace(path.sep + "index", "")
    .replaceAll(path.sep, "/");

const generateId = (filePath) => {
  const name = path.parse(filePath).name;
  if (name === "index") {
    return path.parse(filePath.split(name)[0]).name;
  }
  return name;
};

const getMetadata = (filePath) => {
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);
  return {
    id: generateId(filePath),
    route: generateRoute(filePath),
    ...data,
    dateString: generateDateString(data),
    generatedKeywords: generateKeywords(content),
  };
};

const meta = getTree("./src/pages/")
  .filter((x) => /\.md|\.mdx/.test(x))
  .map((x) => getMetadata(x));

if (!fs.existsSync("./generated")) {
  fs.mkdirSync("./generated");
}
fs.writeFileSync("./generated/siteMeta.json", JSON.stringify(meta, null, 2));
