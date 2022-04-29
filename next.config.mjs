import nextMdx from "@next/mdx";
import mdxWrapperPlugin from "./src/utils/mdxWrapperPlugin.mjs";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import withShiki from "@stefanprobst/rehype-shiki";
import shiki from "shiki";

const highlighter = await shiki.getHighlighter({ theme: "dark-plus" });

const withMDX = nextMdx({
  extension: /\.mdx|\.md?$/,
  options: {
    remarkPlugins: [mdxWrapperPlugin, remarkMath, remarkGfm],
    rehypePlugins: [
      () => withShiki({ highlighter }),
      () => rehypeKatex({ strict: false }),
    ],
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    year: new Date(Date.now()).getFullYear(),
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
