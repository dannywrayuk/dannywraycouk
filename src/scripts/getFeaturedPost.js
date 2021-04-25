import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

export const getFeaturedPost = (fileName) => {
  const filePath = path.resolve("post", fileName);
  const postMarkdown = fs.readFileSync(filePath).toString();
  const { data, content } = matter(postMarkdown);
  const html = marked(content);
  return html;
};
