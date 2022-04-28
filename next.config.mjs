import nextMdx from "@next/mdx";
import mdxWrapperPlugin from "./src/utils/mdxWrapperPlugin.mjs";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const withMDX = nextMdx({
  extension: /\.mdx|\.md?$/,
  options: {
    remarkPlugins: [mdxWrapperPlugin, remarkMath, remarkGfm],
    rehypePlugins: [
      () => rehypeKatex({ strict: false }),
      () => rehypeHighlight({ subset: false }),
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
