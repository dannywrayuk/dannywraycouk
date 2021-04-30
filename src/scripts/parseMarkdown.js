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
