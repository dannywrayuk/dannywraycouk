import fs from "fs";
import path from "path";
import { parseMarkdown } from "./parseMarkdown";

export const getPost = (fileName) => {
  const filePath = path.resolve("post", `${fileName}.md`);
  const markdown = fs.readFileSync(filePath).toString();
  return parseMarkdown(markdown);
};
