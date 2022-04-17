import fs from "fs";
import katex from "katex";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { asFilePath } from "./getFilePaths";
import { getMetadataByRoute } from "./getMetadata";

export const getMarkdown = (route) => {
  return matter(fs.readFileSync(asFilePath(route))).content;
};

export const getMarkdownAsProps = async (route) => {
  const routeString = route.join("/");

  const markdown = getMarkdown(routeString);
  const frontMatter = getMetadataByRoute("/" + routeString)[0];

  const source = await serialize(parseKatex(markdown), {
    scope: frontMatter,
  });

  return { source, frontMatter };
};

const parseKatex = (content) =>
  content
    .replace(/\r/g, "")
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
