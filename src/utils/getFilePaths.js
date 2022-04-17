import fs from "fs";
import path from "path";

const filePaths = [];
const rootFilePath = "post";

export const getFilePaths = () => {
  if (filePaths.length === 0) {
    filePaths.push(
      ...calculateFilePaths(rootFilePath).filter(
        (filePath) => path.extname(filePath) === ".md"
      )
    );
  }
  return filePaths;
};

export const asRoute = (filePath) =>
  filePath.slice(4, -3).replaceAll(path.sep, "/");

export const asFilePath = (route) => path.join("post", route + ".md");

const calculateFilePaths = (filePath) => {
  const filePathContent = fs.readdirSync(filePath);
  const output = [];
  filePathContent.forEach((child) => {
    const childPath = path.join(filePath, child);
    if (fs.lstatSync(childPath).isFile()) {
      output.push(childPath);
    } else {
      output.push(...calculateFilePaths(childPath));
    }
  });
  return output;
};