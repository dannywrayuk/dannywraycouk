import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import katex from "katex";

export const parseMarkdown = (markdown) => {
  const { data, content } = matter(markdown);
  const withKatex = content
    .replace(/(\\\\)/g, "\\\\$1")
    .replace(/\$\$\n?((?:.|\n)*?)\n?\$\$/g, (_, g) =>
      katex.renderToString(g, {
        displayMode: true,
        strict: false,
      })
    )
    .replace(/\$(.*?)\$/g, (_, g) =>
      katex.renderToString(g, { displayMode: false })
    );
  const html = marked(withKatex);
  return { meta: data, content: html };
};

export const getMarkdown = (fileLocation) => {
  const markdown = fs.readFileSync(`post/${fileLocation}.md`).toString();
  return parseMarkdown(markdown);
};

export const getDirectoryTree = (root) => {
  const getAllFiles = (dirPath = "post", arrayOfFiles = []) => {
    const exists = fs.existsSync(dirPath);
    const files = exists ? fs.readdirSync(dirPath) : [];
    files.forEach((file) => {
      const currentFile = `${dirPath}/${file}`;
      const fileStats = fs.statSync(currentFile);
      if (fileStats.isDirectory()) {
        arrayOfFiles = getAllFiles(currentFile, arrayOfFiles);
      } else {
        arrayOfFiles.push(currentFile);
      }
    });
    return arrayOfFiles;
  };
  return getAllFiles(root);
};

export const getMeta = (file) => {
  const data = fs.readFileSync(file).toString();
  return matter(data).data;
};

export const getMetaList = (files) => {
  return files.map((file) => getMeta(file));
};

export const getAllMeta = (root) => {
  const files = getDirectoryTree(`post/${root}`);
  return getMetaList(files);
};
