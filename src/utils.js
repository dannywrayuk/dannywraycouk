import fs from "fs";
import katex from "katex";
import matter from "gray-matter";

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

export const getMarkdownContent = (route) => {
  return fs.readFileSync(`./post/${route}.md`);
};

export const getAllMeta = (root) => {
  const files = getDirectoryTree(`post/${root}`);
  return files.map((file) => {
    const fileData = fs.readFileSync(file).toString();
    const metaData = matter(fileData).data;
    metaData.route = file.slice(4, -3);
    return metaData;
  });
};

export const parseKatex = (content) =>
  content
    .replace(
      /\$\$\n?((?:.|\n)*?)\n?\$\$/g,
      (_, g) =>
        `<EquationBlock dangerouslySetInnerHTML={{__html: \`${katex.renderToString(
          g,
          {
            displayMode: true,
            strict: false,
            output: "html",
          }
        )}\`}}/>`
    )
    .replace(
      /\$(.*?)\$/g,
      (_, g) =>
        `<EquationInline dangerouslySetInnerHTML={{__html: \`${katex.renderToString(
          g,
          {
            displayMode: false,
            output: "html",
          }
        )}\`}}/>`
    );
