const path = require("path");
const keywordExtractor = require("keyword-extractor");

const generateId = (filePath) => {
  const file = path.parse(filePath);
  if (file.name !== "index") return file.name;
  return file.dir.split(path.sep).pop();
};

const generateRoute = (filePath) => {
  const file = path.parse(filePath);
  const dir = file.dir.split(path.sep).filter(Boolean);
  if (file.name !== "index") dir.push(file.name);
  return dir.join("/").replace("src/pages", "");
};

const generateDateString = (date) => {
  if (isNaN(Date.parse(date))) return null;
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

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

const generateKeywords = (content) => {
  const contentKeywords = keywordExtractor.extract(content, {
    language: "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: false,
  });
  return frequencyArray(contentKeywords).join(", ");
};

module.exports = (fm, path, content) => ({
  ...fm,
  id: generateId(path),
  route: generateRoute(path),
  dateString: generateDateString(fm.date),
  generatedKeywords: generateKeywords(content),
});
