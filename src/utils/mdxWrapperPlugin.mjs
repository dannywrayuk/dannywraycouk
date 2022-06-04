import path from "path";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxFromMarkdown } from "mdast-util-mdx";
import { mdxjs } from "micromark-extension-mdxjs";
import { readMetadata } from "../script/readMetadata.js";

export default () => (tree, file) => {
  if (!tree.children[0]) return tree;
  if (tree.children[0].type === "thematicBreak") {
    const firstHeadingIndex = tree.children.findIndex(
      (t) => t.type === "heading"
    );
    if (firstHeadingIndex !== -1) {
      tree.children.splice(0, firstHeadingIndex + 1);
    } else {
      const nextThematicBreak = tree.children
        .slice(1)
        .findIndex((t) => t.type === "thematicBreak");
      if (nextThematicBreak !== -1) {
        tree.children.splice(0, nextThematicBreak + 2);
      }
    }
  }
  const getId = (filePath) => {
    const name = path.parse(filePath).name;
    if (name === "index") {
      return path.parse(filePath.split(name)[0]).name;
    }
    return name;
  };
  const fileId = getId(file.history[0]);
  const meta = readMetadata().find((x) => x.id === fileId);
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
