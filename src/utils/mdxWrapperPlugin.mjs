import path from "path";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxFromMarkdown } from "mdast-util-mdx";
import { mdxjs } from "micromark-extension-mdxjs";
import { readMetadata } from "../script/readMetadata.js";

export default () => (tree, file) => {
  const getId = (filePath) => {
    const name = path.parse(filePath).name;
    if (name === "index") {
      return path.parse(filePath.split(name)[0]).name;
    }
    return name;
  };
  const fileId = getId(file.history[0]);
  const meta = readMetadata().find((x) => x.id === fileId);
  if (!meta) {
    console.log(fileId);
    console.log(file.history);
  }
  const test = fromMarkdown(
    `import MDXParent from  "@components/_mdx.js";
    export const meta = ${JSON.stringify(meta)};
    export default ({children})=>(<MDXParent meta={meta}>{children}</MDXParent>);`,
    {
      extensions: [mdxjs()],
      mdastExtensions: [mdxFromMarkdown()],
    }
  );

  tree.children.push(...test.children);
};
