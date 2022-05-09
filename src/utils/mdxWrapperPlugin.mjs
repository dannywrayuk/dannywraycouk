import matter from "gray-matter";
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
    }
  }
  const { data } = matter(file.value);
  const meta = readMetadata().find((x) => x.id === data.id);

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
